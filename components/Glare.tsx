import { motion } from "framer-motion";

const Glare = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      viewBox="0 0 1241 1296"
      fill="none"
      className="w-full absolute inset-0 origin-top-left z-[999999] pointer-events-none"
    >
      <ellipse
        cx="-151.199"
        cy="-101.646"
        rx="1502"
        ry="138.5"
        transform="rotate(45 -151.199 -101.646)"
        fill="url(#paint0_radial_1_3)"
      />
      <ellipse
        cx="-151.199"
        cy="-101.646"
        rx="1502"
        ry="138.5"
        transform="rotate(27.9417 -151.199 -101.646)"
        fill="url(#paint1_radial_1_3)"
      />
      <ellipse
        cx="-151.199"
        cy="-101.646"
        rx="1502"
        ry="138.5"
        transform="rotate(62.6119 -151.199 -101.646)"
        fill="url(#paint2_radial_1_3)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-74.0412 -101.646) rotate(3.32202) scale(1339.65 171.899)"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="0.665" stopOpacity="0.02" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-74.0412 -101.646) rotate(3.32202) scale(1339.65 171.899)"
        >
          <stop stopColor="white" stopOpacity="0.06" />
          <stop offset="0.665" stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-74.0414 -101.646) rotate(3.32202) scale(1339.65 171.899)"
        >
          <stop stopColor="white" stopOpacity="0.05" />
          <stop offset="0.665" stopOpacity="0.01" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default Glare;
