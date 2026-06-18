"use client";
import { useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
    subscribe,
    createBlobParams,
    generateBlobPath,
    generateStaticBlobPath,
    generateDriftTransform,
} from "@component/lib/blobAnimation";

const BlobCircle = ({ className, style, gradientId }) => {
    const containerRef = useRef(null);
    const groupRef = useRef(null);
    const pathRef = useRef(null);
    const paramsRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "100px" });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const isMobile = window.matchMedia("(max-width: 768px)");

        // Construit (ou reconstruit) les paramètres selon l'intensité (allégée sur mobile).
        const buildParams = () => {
            paramsRef.current = createBlobParams({
                numPoints: isMobile.matches ? 10 : 12,
                intensity: isMobile.matches ? 0.6 : 1,
            });
        };
        buildParams();

        // Reduced motion : tracé statique, pas d'animation.
        if (prefersReducedMotion) {
            if (pathRef.current) pathRef.current.setAttribute("d", generateStaticBlobPath(paramsRef.current));
            return;
        }

        if (!isInView) return;

        // Throttle : ~30 fps desktop, ~20 fps mobile (le morph lent n'exige pas 60 fps).
        let frameInterval = isMobile.matches ? 50 : 33;
        let lastFrame = 0;

        const onResize = () => {
            buildParams();
            frameInterval = isMobile.matches ? 50 : 33;
        };
        isMobile.addEventListener("change", onResize);

        const render = (time) => {
            if (time - lastFrame < frameInterval) return;
            lastFrame = time;
            const params = paramsRef.current;
            if (pathRef.current) pathRef.current.setAttribute("d", generateBlobPath(params, time));
            if (groupRef.current) groupRef.current.setAttribute("transform", generateDriftTransform(params, time));
        };

        const unsubscribe = subscribe(render);
        return () => {
            unsubscribe();
            isMobile.removeEventListener("change", onResize);
        };
    }, [isInView, prefersReducedMotion]);

    return (
        <div ref={containerRef} className={`${className} rounded-full`} style={style} aria-hidden="true">
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <g ref={groupRef}>
                    <path ref={pathRef} fill={`url(#${gradientId})`} />
                </g>
            </svg>
        </div>
    );
};

export default BlobCircle;
