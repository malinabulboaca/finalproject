import "./footer.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Ne găsiți și pe:</h4>
        <div className="social-icons">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="social-icon"
          />

          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faPhone} /> 0754333292
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> stupuldemiere@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Harta</h4>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.458536958432!2d21.315400675851333!3d46.34044317455049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745bf037610b34d%3A0x40c8769a227e61e0!2sStrada%20Clo%C8%99ca%2C%20315200%20Curtici!5e0!3m2!1sro!2sro!4v1721822864910!5m2!1sro!2sro"
            width="400"
            height="80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
