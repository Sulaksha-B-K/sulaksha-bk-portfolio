//src\components\parallax\Parallax.jsx
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
<div
  className="parallax"
  ref={ref}
  style={{
    background:
      type === "services"
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : type === "portfolio"
        ? "linear-gradient(180deg, #111132, #505064)"
        : "linear-gradient(180deg, #111132, #2b2b40)", // ✅ Achievements background
  }}
>
  {/* Heading */}
  <motion.h1 style={{ y: yText }}>
    {type === "services"
      ? "What I Do?"
      : type === "portfolio"
      ? "What I Did?"
      : "What I Won?"}
  </motion.h1>

  {/* Foreground Layer */}
  {type === "ach" ? (
    <motion.div
      className="trophies"
      style={{
        y: yBg,
        backgroundImage: "url('/trophy.png')", // <- add trophy image asset
      }}
    ></motion.div>
  ) : (
    <motion.div className="mountains"></motion.div>
  )}

  {/* Middle Layer */}
  <motion.div
    className="planets"
    style={{
      y: yBg,
      backgroundImage: `url(${
        type === "services"
          ? "/planets.png"
          : type === "portfolio"
          ? "/sun.png"
          : "/stars.png" // ✅ glowing stars for achievements
      })`,
    }}
  ></motion.div>

  {/* Background Stars Layer */}
  <motion.div style={{ x: yBg }} className="stars"></motion.div>
</div>

  );
};

export default Parallax;
