import React from "react";
// import Images from "../../Images/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Keep in Touch</h4>
          <a href="#">Facebook Wine</a>

          <a href="#">Facebook Whisky</a>

          <a href="#">Instagram</a>
        </div>

        <div className="footer-section">
          <h4>Contact and Customer Service</h4>
          <p>
            De Kwakel
            <br /> 1424 AR
            <br /> Gerberalaan 53 The Netherlands
            <br /> T: +31(0)644289213
            <br /> E: info@D-vinewines.com
          </p>
        </div>
        <div className="footer-section">
          <h4>Shopping Information</h4>
          <a href="#">FAQ</a>

          <a href="#">Delivery</a>

          <a href="#">Service and Guarantee</a>

          <a href="#">Conditions</a>

          <a href="#">Privacy Statement</a>
        </div>
      </div>

      <div className="misc">
        <p>© 2020, D-Vine Wine created by Luc van Kerkvoort</p>
      </div>
    </div>
  );
};

export default Footer;
