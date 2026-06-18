// Animation organique des BlobCircle : génération de tracé continu (pseudo-bruit par somme de
// sinus) + ticker requestAnimationFrame mutualisé pour toutes les instances.

// ---------------------------------------------------------------------------
// Ticker mutualisé : une seule boucle rAF pour tous les blobs abonnés.
// ---------------------------------------------------------------------------
const subscribers = new Set();
let rafId = null;

const loop = (time) => {
    for (const fn of subscribers) fn(time);
    rafId = requestAnimationFrame(loop);
};

export const subscribe = (fn) => {
    subscribers.add(fn);
    if (rafId === null) rafId = requestAnimationFrame(loop);
    return () => {
        subscribers.delete(fn);
        if (subscribers.size === 0 && rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };
};

// ---------------------------------------------------------------------------
// Paramètres aléatoires par instance (figés au montage → chaque blob est unique).
// ---------------------------------------------------------------------------
const rand = (min, max) => min + Math.random() * (max - min);

const sign = () => (Math.random() < 0.5 ? -1 : 1);

// `intensity` (0..1) module l'amplitude — réduite sur mobile.
// Le rayon est piloté par une somme d'harmoniques angulaires (k lobes), donc c'est une fonction
// LISSE de l'angle : pas de plat ni de pointe, juste des lobes doux qui ondulent dans le temps.
export const createBlobParams = ({ numPoints = 12, intensity = 1 } = {}) => {
    const harmonics = [
        { k: 2, amp: rand(1.3, 2.2) * intensity, phase: rand(0, Math.PI * 2), speed: rand(0.00021, 0.00039) * sign() },
        { k: 3, amp: rand(0.8, 1.5) * intensity, phase: rand(0, Math.PI * 2), speed: rand(0.00028, 0.00051) * sign() },
        { k: 4, amp: rand(0.4, 0.9) * intensity, phase: rand(0, Math.PI * 2), speed: rand(0.00037, 0.00063) * sign() },
    ];
    return {
        numPoints,
        baseRadius: 45,
        harmonics,
        // Dérive flottante (rotation + échelle), très lente.
        drift: {
            rotAmp: rand(1.5, 3.5) * intensity,        // degrés
            rotFreq: rand(0.0000575, 0.0001265),
            rotPhase: rand(0, Math.PI * 2),
            scaleAmp: rand(0.01, 0.022) * intensity,   // ±1–2.2 %
            scaleFreq: rand(0.0000805, 0.0001725),
            scalePhase: rand(0, Math.PI * 2),
        },
    };
};

// ---------------------------------------------------------------------------
// Construction du tracé : points → courbe fermée lisse (Catmull-Rom → Bézier cubique).
// ---------------------------------------------------------------------------
const CENTER = 50;

const computePoints = (params, t) => {
    const { numPoints, baseRadius, harmonics } = params;
    const coords = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i * 2 * Math.PI) / numPoints;
        let radius = baseRadius;
        for (const h of harmonics) {
            radius += h.amp * Math.sin(h.k * angle + h.phase + t * h.speed);
        }
        coords.push({
            x: CENTER + radius * Math.cos(angle),
            y: CENTER + radius * Math.sin(angle),
        });
    }
    return coords;
};

const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

// Catmull-Rom *centripète* (alpha = 0.5) fermé → segments de Bézier cubique.
// La paramétrisation par distance évite les cusps/angles que produit la version uniforme
// lorsque des points voisins ont des rayons différents → contour toujours doux.
const toClosedPath = (pts) => {
    const n = pts.length;
    const alpha = 0.5;
    let d = `M ${pts[0].x.toFixed(3)},${pts[0].y.toFixed(3)}`;
    for (let i = 0; i < n; i++) {
        const p0 = pts[(i - 1 + n) % n];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % n];
        const p3 = pts[(i + 2) % n];

        const d1 = Math.pow(dist(p0, p1), alpha) || 1e-6;
        const d2 = Math.pow(dist(p1, p2), alpha) || 1e-6;
        const d3 = Math.pow(dist(p2, p3), alpha) || 1e-6;
        const d1s = d1 * d1, d2s = d2 * d2, d3s = d3 * d3;

        // Points de contrôle du segment p1 → p2.
        const c1x = (d1s * p2.x - d2s * p0.x + (2 * d1s + 3 * d1 * d2 + d2s) * p1.x) / (3 * d1 * (d1 + d2));
        const c1y = (d1s * p2.y - d2s * p0.y + (2 * d1s + 3 * d1 * d2 + d2s) * p1.y) / (3 * d1 * (d1 + d2));
        const c2x = (d3s * p1.x - d2s * p3.x + (2 * d3s + 3 * d3 * d2 + d2s) * p2.x) / (3 * d3 * (d3 + d2));
        const c2y = (d3s * p1.y - d2s * p3.y + (2 * d3s + 3 * d3 * d2 + d2s) * p2.y) / (3 * d3 * (d3 + d2));

        d += ` C ${c1x.toFixed(3)},${c1y.toFixed(3)} ${c2x.toFixed(3)},${c2y.toFixed(3)} ${p2.x.toFixed(3)},${p2.y.toFixed(3)}`;
    }
    return d + " Z";
};

export const generateBlobPath = (params, t) => toClosedPath(computePoints(params, t));

// Tracé statique (prefers-reduced-motion) : un seul échantillon temporel.
export const generateStaticBlobPath = (params) => generateBlobPath(params, 0);

// Transform de dérive flottante (rotation + échelle autour du centre 50,50).
export const generateDriftTransform = (params, t) => {
    const { drift } = params;
    const rot = drift.rotAmp * Math.sin(t * drift.rotFreq + drift.rotPhase);
    const scale = 1 + drift.scaleAmp * Math.sin(t * drift.scaleFreq + drift.scalePhase);
    return `rotate(${rot.toFixed(3)} ${CENTER} ${CENTER}) translate(${CENTER} ${CENTER}) scale(${scale.toFixed(4)}) translate(${-CENTER} ${-CENTER})`;
};
