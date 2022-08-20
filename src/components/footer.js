import React from "react";
import "../styles/footer.css";

const Footer = () => {

  return (
    <div style={{ margin:"0px" }}>
      <div
        style={{
          textAlign: "center",
          bottom: 0,
          color: "white",
          fontSize: 10,
          margin: "0px 0px 0px 0px",
          padding: "10px 0px 10px 0px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        Designed and developed by vigneshreddy.mumbai@gmail.com
      </div>

      <div className="footer-div">
        <div className="footer-flex">
        </div>
      </div>

      <div className="copyright-band">Copyright © Digital Journal of Science and Technology (India) 2021</div>

    </div>
  );
};

export default Footer;
