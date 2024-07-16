// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const generateRandomPath = () => {
//   const numPoints = 11; // Augmentez le nombre de points pour des formes plus arrondies
//   const centerX = 50;
//   const centerY = 50;
//   const baseRadius = 45; // Ajustez ici si nécessaire
//   const variation = 4; // Réduisez la variation pour des formes moins déformées
//   const points = [];

//   for (let i = 0; i < numPoints; i++) {
//     const angle = (i * 2 * Math.PI) / numPoints;
//     const randomRadius = baseRadius + Math.random() * variation - variation / 2;
//     const x = centerX + randomRadius * Math.cos(angle);
//     const y = centerY + randomRadius * Math.sin(angle);
//     points.push({ x, y });
//   }

//   let path = `M ${points[0].x},${points[0].y}`;

//   for (let i = 1; i < points.length; i++) {
//     const nextPoint = points[(i + 1) % points.length];
//     const controlPoint1 = points[i];
//     const controlPoint2 = {
//       x: (controlPoint1.x + nextPoint.x) / 2,
//       y: (controlPoint1.y + nextPoint.y) / 2,
//     };
//     path += ` Q ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y}`;
//   }

//   path += ' Z';
//   if (!path) {
//     console.error('generateRandomPath retourne undefined');
//     return 'M0,0'; // Retourne une valeur par défaut valide
//   }
//   return path;
// };


// const BlobCircle = ({ className, style, gradientId }) => {
//   const [path, setPath] = useState('M 0,0 L 0,0'); // Valeur par défaut plus explicite

//   useEffect(() => {
//     console.log('je suis dans useEffect');
//     const updatePath = () => {
//       try {
//         const newPath = generateRandomPath();
//         //console.log('newPath:', newPath); // Ajout pour débogage
//         if (newPath && typeof newPath === 'string') { // Vérifie si newPath est truthy et une chaîne
//           setPath(newPath);
//         } else {
//           console.error('generateRandomPath n\'a pas retourné une chaîne :', newPath);
//           setPath('M0,0'); // Définissez une valeur par défaut pour path
//         }
//       } catch (error) {
//         console.error('Erreur lors de la génération du chemin :', error);
//         setPath('M0,0'); // Définissez une valeur par défaut en cas d'erreur
//       }
//     };

//     updatePath();
//     const interval = setInterval(updatePath, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // console.log('Path actuel :', path); // Débogage pour path
//   // console.log('Gradient ID :', gradientId); // Débogage pour gradientId

//   if (!path) {
//     return null;
//   }

//   return (
//     <div className={`${className} rounded-full`} style={style}>
//       <motion.svg
//         viewBox="0 0 100 100"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           d={path}
//           fill={`url(#${gradientId})`}
//           animate={{ d: path }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.svg>
//     </div>
//   );
// };


// export default BlobCircle;


// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const generateRandomPath = () => {
//   const numPoints = 11;
//   const centerX = 50;
//   const centerY = 50;
//   const baseRadius = 45;
//   const variation = 4;
//   const points = [];

//   for (let i = 0; i < numPoints; i++) {
//     const angle = (i * 2 * Math.PI) / numPoints;
//     const randomRadius = baseRadius + Math.random() * variation - variation / 2;
//     const x = centerX + randomRadius * Math.cos(angle);
//     const y = centerY + randomRadius * Math.sin(angle);

//     if (isNaN(x) || isNaN(y) || x < 0 || x > 100 || y < 0 || y > 100) {
//       console.error(`Invalid point generated: (${x}, ${y}) at index ${i}`);
//       return null;
//     }

//     points.push({ x, y });
//   }

//   if (points.length < numPoints) {
//     console.error('Not enough points generated');
//     return null;
//   }

//   let path = `M ${points[0].x},${points[0].y}`;
//   for (let i = 1; i < points.length; i++) {
//     const nextPoint = points[(i + 1) % points.length];
//     const controlPoint1 = points[i];
//     const controlPoint2 = {
//       x: (controlPoint1.x + nextPoint.x) / 2,
//       y: (controlPoint1.y + nextPoint.y) / 2,
//     };
//     path += ` Q ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y}`;
//   }
//   path += ' Z';

//   if (path.includes('undefined') || path.includes('NaN')) {
//     console.error('Generated invalid path:', path);
//     return null;
//   }

//   // console.log('Generated valid path:', path);
//   return path;
// };

// const BlobCircle = ({ className, style, gradientId }) => {
//   const [path, setPath] = useState(null);

//   useEffect(() => {
//     const updatePath = () => {
//       const newPath = generateRandomPath();
//       if (newPath) {
//         setPath(newPath);
//       } else {
//         console.error('Failed to generate a valid path');
//       }
//     };

//     updatePath();
//     const interval = setInterval(updatePath, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={`${className} rounded-full`} style={style}>
//       <motion.svg
//         viewBox="0 0 100 100"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full"
//         preserveAspectRatio="none"
//       >
//         {path && (
//           <motion.path
//             d={path}
//             fill={`url(#${gradientId})`}
//             animate={{ d: path }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         )}
//       </motion.svg>
//     </div>
//   );
// };

// export default BlobCircle;



"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const generateRandomPath = () => {
  const numPoints = 11;
  const centerX = 50;
  const centerY = 50;
  const baseRadius = 45;
  const variation = 4;
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const angle = (i * 2 * Math.PI) / numPoints;
    const randomRadius = baseRadius + Math.random() * variation - variation / 2;
    const x = centerX + randomRadius * Math.cos(angle);
    const y = centerY + randomRadius * Math.sin(angle);

    if (isNaN(x) || isNaN(y) || x < 0 || x > 100 || y < 0 || y > 100) {
      console.error(`Invalid point generated: (${x}, ${y}) at index ${i}`);
      return null;
    }

    points.push({ x, y });
  }

  if (points.length < numPoints) {
    console.error('Not enough points generated');
    return null;
  }

  let path = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const nextPoint = points[(i + 1) % points.length];
    const controlPoint1 = points[i];
    const controlPoint2 = {
      x: (controlPoint1.x + nextPoint.x) / 2,
      y: (controlPoint1.y + nextPoint.y) / 2,
    };

    if (isNaN(controlPoint1.x) || isNaN(controlPoint1.y) || isNaN(controlPoint2.x) || isNaN(controlPoint2.y)) {
      console.error(`Invalid control point generated: ${controlPoint1.x}, ${controlPoint1.y}, ${controlPoint2.x}, ${controlPoint2.y}`);
      return null;
    }

    path += ` Q ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y}`;
  }
  path += ' Z';

  if (path.includes('undefined') || path.includes('NaN')) {
    console.error('Generated invalid path:', path);
    return null;
  }

  return path;
};

const BlobCircle = ({ className, style, gradientId }) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      const newPath = generateRandomPath();
      if (newPath) {
        setPath(newPath);
      } else {
        console.error('Failed to generate a valid path');
      }
    };

    updatePath(); // Initial path generation on the client
    const interval = setInterval(updatePath, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} rounded-full`} style={style}>
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {path ? (
          <motion.path
            d={path}
            fill={`url(#${gradientId})`}
            animate={{ d: path }}
            initial={false}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        ) : (
          <text x="10" y="50" fill="red">Invalid Path</text>
        )}
      </motion.svg>
    </div>
  );
};

export default BlobCircle;