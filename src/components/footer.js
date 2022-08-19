import React from "react";
import data from "../data/anchor_data.json";
import "../styles/footer.css";
import { StaticImage } from "gatsby-plugin-image";
import VisitSite from "../components/visitSiteButton";

function FooterColumn({
  title = "Header",
  links = [{ link: "#", title: "No Items." }],
}) {
  return (
    <div>
      <div style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
        {title}
      </div>
      <div style={{ marginTop: 10 }}>
        {links.map((x) => (
          <>
            <a
              href={x.link}
              style={{ textDecoration: "none", color: "white", fontSize: 10 }}
            >
              {x.title}
            </a>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  const homeList = data.home;
  const aboutList = data.about;
  const franchiseList = data.franchise;

  return (
    <div>
      <div
        style={{
          position: "sticky",
          width: "inherit",
          textAlign: "center",
          bottom: 0,
          color: "white",
          fontSize: 10,
          margin: "10px 0px 0px 0px",
          padding: "10px 0px 10px 0px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        Designed and developed by vigneshreddy.mumbai@gmail.com
      </div>

      <div className="footer-div">
        <div className="footer-flex">
          <FooterColumn title="Course" links={homeList} />
          <FooterColumn title="About" links={aboutList} />
          <FooterColumn title="Business" links={franchiseList} />
        </div>
      </div>

      <div className="copyright-band">Copyright © AEVRT (India) 2021</div>

    </div>
  );
};

export default Footer;
