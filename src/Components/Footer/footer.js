import React from "react";
import Images from "../../Images/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Keep in Touch</h4>
          <a href>Facebook Wine</a>

          <a href>Facebook Whisky</a>

          <a href>Instagram</a>
        </div>

        <div className="footer-section">
          <h4>Contact and Customer Service</h4>
          <p>
            Spiegelstraat 38C <br /> 1405 HX Bussum <br /> The Netherlands{" "}
            <br /> T: +31 (0)35 678 0330 <br /> E: contactbow@bestofwines.com
          </p>
        </div>
        <div className="footer-section">
          <h4>Shopping Information</h4>
          <a href>FAQ</a>

          <a href>Delivery</a>

          <a href>Service and Guarantee</a>

          <a href>Conditions</a>

          <a href>Privacy Statement</a>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <p>
            Mon 13:00 - 18:00
            <br />
            Tue - Fri 09:30 - 18:00
            <br />
            Sat 09:30 - 17:00
            <br />
            Closed on Sun
            <br />
            T: +31 (0)35 768 0310
          </p>
        </div>
      </div>

      <div className="misc">
        <p>© 2020, Kastjes Fabriek created by Luc van Kerkvoort</p>
      </div>
    </div>
  );
};

export default Footer;
