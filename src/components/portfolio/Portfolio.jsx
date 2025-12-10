import { useRef } from "react"; 
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// ✅ Local project data
const items = [
  {
    id: 1,
    title: "DocCogniX",
    img: "/projects/doccognix.jpg",
    desc: "AI-powered PDF content analysis & retrieval system built with Python, Streamlit, LangChain, FAISS, Tesseract OCR, and Google Gemini Pro.",
    repo: "https://github.com/Sulaksha-B-K/DocCogniX",
  },
  {
    id: 2,
    title: "ATS Scanner",
    img: "/projects/ats.jpg",
    desc: "Resume rating and ranking tool using BERT similarity in NLP models to automate ATS scoring for recruitment.",
    repo: "https://github.com/Sulaksha-B-K/ATS-with-BERT-Similarity",
  },
  {
    id: 3,
    title: "MSIIC College Website",
    img: "/projects/msiic.jpg",
    desc: "Lightweight HTML/CSS/JS portal to streamline department club workflows at my college.",
    repo: "https://drive.google.com/file/d/1djRP9Fh_dPN5cmRU4KB0ST-S3tPuR_Mz/view?usp=sharing",
  },
  {
    id: 4,
    title: "Audiobook Generator",
    img: "/projects/music.jpg",
    desc: "Python & Flask app converting text/PDFs to audio with GPT-2 summarization.",
    repo: "https://github.com/Sulaksha-B-K/Audiobook_Generator",
  },
];

// ✅ Local certifications data
const certifications = [
  {
    id: 1,
    title: "Generative AI",
    img: "/certifications/oracle.jpg",
    desc: "I'm an ORACLE Certified Generative AI Professional.",
    repo: "/certifications/oracle.jpg",
  },
  {
    id: 2,
    title: "Data Analytics Job Simulation",
    img: "/certifications/tata.jpg",
    desc: "Completed GENAI powered Data Analytics Job Simulation",
    repo: "/certifications/tata.jpg",
  },
  {
    id: 3,
    title: "IBM Machine Learning to Generative AI",
    img: "/certifications/ibm.jpg",
    desc: "Training on basic ML Concepts.",
    repo: "/certifications/ibm.jpg",
  },
    {
    id: 4,
    title: "Python for Data Science",
    img: "/certifications/pyDS.jpg",
    desc: "Training on basic Data Science Concepts.",
    repo: "/certifications/pyDS.jpg",
  },
];


const Single = ({ item, isCert }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            {/* 🔥 AUTO-SWITCH BUTTON TYPE */}
            <a href={item.repo} target="_blank" rel="noopener noreferrer">
              <button className={isCert ? "certBtn" : ""}>
                {isCert ? "👁 View Certificate" : "🗄 Repository"}
              </button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Section = ({ title, data }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const isCert = title.includes("Cert");

  return (
    <div className="portfolio" ref={ref}>
      <div className={`progress ${isCert ? "certColor" : ""}`}>
        <h1>{title}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {data.map((item) => (
        <Single item={item} key={item.id} isCert={isCert} />
      ))}
    </div>
  );
};


const Portfolio = () => {
  return (
    <>
      <Section title="🛠 Projects" data={items} />
      <Section title="🎓 Certifications" data={certifications} />
    </>
  );
};

export default Portfolio;
