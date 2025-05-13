import { motion } from "framer-motion";
import React from "react";

// Import logos
import quantumLogo from "../assets/images/quantum.svg";
import acmeLogo from "../assets/images/acme-corp.svg";
import echoValleyLogo from "../assets/images/echo-valley.svg";
import pulseLogo from "../assets/images/pulse.svg";
import outsideLogo from "../assets/images/outside.svg";
import apexLogo from "../assets/images/apex.svg";
import celestialLogo from "../assets/images/celestial.svg";
import twiceLogo from "../assets/images/twice.svg";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip bg-gradient-to-b from-[#0B0B0B]/90 to-[#252525] flex justify-center">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already Chosen by these market leaders
        </h3>
        <div
          className="overflow-hidden mt-12"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Animate the inner div with hover pause */}
          <motion.div
            className="flex gap-24 pr-24"
            initial={{ x: 0 }}
            animate={{ x: "-66.66%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              // Pause animation on hover
              animationPlayState: "paused",
            }}
          >
            {/* Repeat logos to make seamless scroll */}
            {[...logos, ...logos].map((logo) => (
              <img
                className="h-10 w-auto flex-shrink-0"
                src={logo.image}
                key={`${logo.name}-${Math.random()}`}
                alt={logo.name}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
