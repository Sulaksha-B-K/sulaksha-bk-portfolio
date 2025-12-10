import { useRef, useState } from "react";
import "./services.scss";
import { useEffect } from "react";

import { motion, useInView, AnimatePresence } from "framer-motion";
const techLogos = [
  "/public/logos/python.png",
  "/public/logos/react.png",
  "/public/logos/node.png",
  "/public/logos/laravel.png",
  "/public/logos/mysql.png",
  "/public/logos/mongodb.png",
  "/public/logos/php.png",
  "/public/logos/streamlit.png",
  "/public/logos/pyqt6.png",
];
const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [showModal, setShowModal] = useState(false);

  /* 🔒 Prevent body scroll when modal is open */
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";  // disable background scroll
    } else {
      document.body.style.overflow = "auto";    // re-enable when closed
    }

    return () => {
      document.body.style.overflow = "auto";    // safety cleanup
    };
  }, [showModal]);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={"animate"}
      ref={ref}
    >
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modalOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modalContent enhancedModal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="closeBtn" onClick={() => setShowModal(false)}>
                ×
              </button>

              <div className="modalHeader">
                <h2 className="modalTitle">📝 What I Do</h2>
                <p className="modalSubtitle">
                  I'm a Full Stack Developer (GET) at Sona BLW Precision Forgings, Chennai, Tamil Nadu, India.
                </p>
              </div>

              <div className="honeycombGrid">
                <ul className="honeycomb">
                  <li className="honeycomb-cell hex-mern">
                    <img className="honeycomb-cell_img" src="/mern.gif" alt="MERN" />
                    <div className="honeycomb-cell_title">MERN Stack Development</div>
                  </li>

                  <li className="honeycomb-cell hex-aiml">
                    <img className="honeycomb-cell_img" src="/aiml.gif" alt="AI/ML" />
                    <div className="honeycomb-cell_title">AI & Machine Learning Engineering</div>
                  </li>

                  <li className="honeycomb-cell hex-python">
                    <img className="honeycomb-cell_img" src="/py.gif" alt="Python" />
                    <div className="honeycomb-cell_title">Python Automation & App Development</div>
                  </li>

                  <li className="honeycomb-cell hex-powerbi">
                    <img className="honeycomb-cell_img" src="/bi.gif" alt="BI Tools" />
                    <div className="honeycomb-cell_title">Power BI & Data Visualization</div>
                  </li>
                </ul>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text Container */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          Engineering is the closest thing to
          <br /> magic that exists in this world.
        </p>
        <hr />
      </motion.div>

      {/* Titles */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Imagine</motion.b> Ideate
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovate</motion.b> Impact
          </h1>
          <button onClick={() => setShowModal(true)}>View More 🖖🏻</button>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Services;
