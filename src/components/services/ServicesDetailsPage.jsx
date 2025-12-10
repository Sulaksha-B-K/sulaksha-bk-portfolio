//src\components\services\ServicesDetailsPage.jsx
import { useNavigate } from "react-router-dom";
// import "./servicesdetails.scss"; // OPTIONAL new styling

const ServicesDetailsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/#Services"); // jump back to same section
  };

  return (
    <div className="detailsPage">

      <button className="backBtn" onClick={goBack}>← Back</button>

      <h2>📝 What I Do</h2>
      <p>Full Stack Developer (GET) — Sona BLW Precision Forgings, Chennai</p>

      <ul className="honeycomb">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell_img" src="./gifs/mern.gif" alt="MERN" />
          <div className="honeycomb-cell_title">MERN Migration</div>
        </li>

        <li className="honeycomb-cell">
          <img className="honeycomb-cell_img" src="./gifs/malware.gif" alt="Malware" />
          <div className="honeycomb-cell_title">USB Malware Scanner</div>
        </li>

        <li className="honeycomb-cell">
          <img className="honeycomb-cell_img" src="./gifs/automation.gif" alt="Automation" />
          <div className="honeycomb-cell_title">Automation Tool</div>
        </li>

        <li className="honeycomb-cell">
          <img className="honeycomb-cell_img" src="./gifs/portal.gif" alt="Portal" />
          <div className="honeycomb-cell_title">Portal Enhancements</div>
        </li>

        <li className="honeycomb_Hidden"></li>
        <li className="honeycomb_Hidden"></li>
      </ul>

    </div>
  );
};

export default ServicesDetailsPage;
