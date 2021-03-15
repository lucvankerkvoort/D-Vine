import React from "react";
import instagram from "../../Images/instagram.png"
import facebook from "../../Images/facebook.png"

const imageStyle = {
  marginLeft: "5px",
  objectFit: "contain"
}
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Keep in Touch</h4>
          <div style={{ display: "flex",alignItems:"center" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Gooddvine">
              <img style={imageStyle} src={facebook} alt="Facebook" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/good_d_vine/">
              <img style={{marginLeft:"5px",
  objectFit:"contain",width:"55px"}} src={instagram} alt="Instagram"/>
          </a>
          </div>
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
