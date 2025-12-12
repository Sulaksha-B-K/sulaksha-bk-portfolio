import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const scrollToServices = () => {
    const section = document.getElementById("Services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contactSection">

      {/* CONTACT CONTENT */}
      <motion.div
        className="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* LEFT */}
        <div className="textContainer">

          {/* ✅ MAIN TAGLINE NOW A CLICKABLE LINK */}
          <h1
            className="clickableTagline"
            onClick={scrollToServices}
          >
            A steady catalyst in progress for your next big build.
          </h1>

          <div className="item">

            {/* ✅ CLICKABLE EMAIL HEADER */}
            <h2
              onClick={() =>
                (window.location.href = "mailto:sulaksha.b.k@gmail.com")
              }
              className="clickableHeader"
            >
              Email
            </h2>

            <a href="mailto:sulaksha.b.k@gmail.com">
              sulaksha.b.k@gmail.com
            </a>
          </div>

          <div className="item">

            {/* ✅ CLICKABLE LINKEDIN HEADER */}
            <h2
              onClick={() =>
                window.open("https://linkedin.com/in/sulaksha-b-k", "_blank")
              }
              className="clickableHeader"
            >
              LinkedIn
            </h2>

            <a
              href="https://linkedin.com/in/sulaksha-b-k"
              target="_blank"
            >
              linkedin.com/in/sulaksha-b-k
            </a>
          </div>

          <div className="item">
            <h2>Address</h2>
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="formContainer">
          <form
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              const data = new FormData(e.target);

              try {
                const res = await fetch("https://formspree.io/f/mrbnlnag", {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                });

                if (res.ok) {
                  setSuccess(true);
                  setError(false);
                  e.target.reset();
                } else {
                  setError(true);
                }
              } catch {
                setError(true);
              }
            }}
          >
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" type="email" required />
            <textarea name="message" placeholder="Message" required />

            <button type="submit">Submit</button>

            {success && (
              <span style={{ color: "lightgreen" }}>
                ✔ Message sent successfully!
              </span>
            )}
            {error && (
              <span style={{ color: "red" }}>
                ✖ Failed to send message. Try again.
              </span>
            )}
          </form>
        </div>
      </motion.div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerContent">

          <p className="footerText">
            © {new Date().getFullYear()} Sulaksha B K • All Rights Reserved • Made with 
            <span className="heart"> ♥ </span> 
            by <strong>Sulaksha</strong>
          </p>

          <a
            className="backToTopLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Back to Top
          </a>

          <a 
            href="./Sulaksha_B_K_Resume.pdf"
            download
            className="footer-resume"
          >
            Download Resume
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Contact;
