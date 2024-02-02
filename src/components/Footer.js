import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61553650089222">
          <img
            className="social-media-icon"
            alt="facebook"
            src={process.env.PUBLIC_URL + "/images/facebook-icon.jpg"}
          />
        </a>
        <a href="#">
          <img
            className="social-media-icon"
           
            src={process.env.PUBLIC_URL + "/images/instagram-icon.png"}
            alt="instagram"
          />
        </a>
        <a href="#">
          <img
            className="social-media-icon"
            src={process.env.PUBLIC_URL + "/images/twiter-icon.png"}
            alt="twiter"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
