import React from "react";
import "../styles/layout.css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import { StaticImage } from "gatsby-plugin-image";
import favicon from "../images/favicon.ico";
import logo from "../images/avert.png";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="container">
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },

          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Academy of Electric Vehicles Research and Technology.",
          },
          {
            property: "og:description",
            content:
              "EV Course - Electric Vehicles Assembly, Maintenence & Repairs Training. Includes sizing, testing, troubleshooting and component-level repairs of battery, EV Controller, DC to DC converter and battery pack assembly. EV motors and hubs.",
          },
          { property: "og:url", content: "https://trainingev.gatsbyjs.io" },
          { property: "og:image", content: `${logo}` },
        ]}
        link={[{ rel: "icon", type: "image/x-icon", href: `${favicon}` }]}
      >
        <title>{pageTitle} - ÆVRT</title>
        <meta property="og:url" content="https://trainingev.gatsbyjs.io" />

        <meta
          name="description"
          content="EV Course - Electric Vehicles Assembly, Maintenence & Repairs Training. Includes sizing, testing, troubleshooting and component-level repairs of battery, EV Controller, DC to DC converter and battery pack assembly. EV motors and hubs."
        />
      </Helmet>

      <div className="headerDiv">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="headerText" style={{margin:"25px 0px 20px 0px"}}>{pageTitle}</p>
        </div>
      </div>

      <Navbar title={pageTitle} />
      <div style={{ minWidth: 500, maxWidth: "50%", margin: "auto" }}>
        {children}
      </div>

      <Footer />
    </main>
  );
};

export default Layout;
