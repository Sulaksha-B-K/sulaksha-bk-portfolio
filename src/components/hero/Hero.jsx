// src/components/hero/Hero.jsx
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: 1 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        AI Generalist and Full Stack Developer
      </motion.div>

      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}> SULAKSHA B K</motion.h2>
          <motion.h1 variants={textVariants}>
            AI Generalist and Full Stack Developer
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            {/* Download Resume */}
            <motion.a
              href="/Sulaksha_B_K_Resume.pdf" // put PDF in public folder
              download
              style={{
                backgroundColor: "#13ebfa",
                color: "#000144ff",
                padding: "15px 25px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 1000,
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>

            {/* Contact Me */}
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("Contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "15px 25px",
                border: "1px solid white",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 300,
                marginLeft: "15px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <motion.img
  src="/hero.png"
  alt="hero"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6, ease: "easeOut" }}
/>

      </div>
    </div>
  );
};

export default Hero;
