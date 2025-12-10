// src/components/achievements/Achievements.jsx
import React, { useState, useEffect } from "react";
import "./achievements.scss";

const achievementsData = [
  {
    img: "./achievements/R5.gif",
    author: "SULAKSHA",
    title: "WEBSITE REPLICATION",
    topic: "AWARD",
    desc: "Secured 1st prize for recreating a fully functioning website purely by observing its output design, matching its layout, interactions, and user experience with precision.",
    popup: "./achievements/website_replication_award.jpg",
  },
  {
    img: "./achievements/R6.gif",
    author: "SULAKSHA",
    title: "PROJECT DEMO",
    topic: "AWARD",
    desc: "Presented my project concept to industry investors and delivered a live demonstration highlighting its real-world value and technical capability.",
    popup: "./achievements/project_demo_award.jpg",
  },
  {
    img: "./achievements/R7.gif",
    author: "SULAKSHA",
    title: "BEST PROJECT",
    topic: "AWARD",
    desc: "Developed and showcased a project that earned the Best Project recognition at the department level for innovation and execution.",
    popup: "./achievements/best_project_award.jpg",
  },
  {
    img: "./achievements/R4.gif",
    author: "SULAKSHA",
    title: "DEPRESSION DETECTION IN SOCIAL MEDIA TEXT",
    topic: "RESEARCH",
    desc: "Created a model with ML algorithms and ensembling techniques to identify early signs of depression from social media posts using text classification.",
    popup: "https://aclanthology.org/2023.ltedi-1.19/",
  },
  {
    img: "./achievements/R2.gif",
    author: "SULAKSHA",
    title: "SARCASM DETECTION IN DRAVIDIAN LANGUAGES",
    topic: "RESEARCH",
    desc: "Built a sarcasm text detection system for Dravidian languages using advanced BiLSTM models to analyze linguistic and contextual cues.",
    popup: "https://ceur-ws.org/Vol-4054/T4-6.pdf",
  },
  {
    img: "./achievements/R3.gif",
    author: "SULAKSHA",
    title: "DRIVER DROWSINESS DETECTION",
    topic: "RESEARCH",
    desc: "Developed a drowsiness detection model that monitors facial cues and alerts drivers using deep-learning-based visual analysis.",
    popup: "https://ieeexplore.ieee.org/abstract/document/10722297",
  },
];

const Achievements = () => {
  const [active, setActive] = useState(0);
  const len = achievementsData.length;

  // Modal State
  const [modal, setModal] = useState(null);

  const next = () => setActive((i) => (i + 1) % len);
  const prev = () => setActive((i) => (i - 1 + len) % len);

  useEffect(() => {
    const id = setInterval(next, 12000);
    return () => clearInterval(id);
  }, []);

  const getClass = (index) => {
    if (index === active) return "card active";
    if (index === (active - 1 + len) % len) return "card left";
    if (index === (active + 1) % len) return "card right";
    if (index === (active - 2 + len) % len) return "card l2";
    if (index === (active + 2) % len) return "card r2";
    return "card hidden";
  };

  const current = achievementsData[active];

  // Handle icon click
  const openAchievement = () => {
    if (!current.popup) return;

    if (current.topic === "RESEARCH") {
      // Open external research link normally
      window.open(current.popup, "_blank", "noopener,noreferrer");
    } else {
      // Open modal popup for AWARD images
      setModal({
        type: "image",
        src: current.popup,
        title: current.title,
      });
    }
  };

  return (
    <div className="achievements-wrapper">

      {/* COVERFLOW */}
      <div className="coverflow">
        {achievementsData.map((item, i) => (
          <div key={i} className={getClass(i)}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <div className="topic">{item.topic}</div>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* NAV BUTTONS */}
      <div className="nav">
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>

      {/* DESCRIPTION */}
      <div className="desc-area">
        <h2>
          {current.title}
          <span className="openLinkIcon" onClick={openAchievement}>🔗</span>
        </h2>
        <p>{current.desc}</p>
      </div>

      {/* MODAL POPUP FOR AWARD IMAGES */}
      {modal && modal.type === "image" && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(null)}>
              ✕
            </button>

            <img className="popup-image" src={modal.src} alt={modal.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
