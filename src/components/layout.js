import React from "react";
import "../styles/layout.css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, pageSubTitle="Digital Journal of Science and Technology", mainContent, sideContent }) => {
  return (
    <div style={{ display:"flex", minHeight:"100vh", flexDirection:"column", justifyContent:"space-between" }}>
      <div className="container">
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
            {/* property: "og:image", content: `${logo}` */},
          ]}
          link={[{ rel: "icon", type: "image/x-icon", href: "xyz" }]}
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
              justifyContent: "center", flexDirection:"column",
            }}
          >
            <p className="headerText" style={{margin:"25px 0px 20px 0px"}}>{pageTitle}</p>
            <p className="headerSubtext">{pageSubTitle}</p>
          </div>
        </div>

        <Navbar title={pageTitle} />

        <div style={{ minWidth:"300px", maxWidth: "60%", display:"flex", flexDirection:"row", margin:"auto",paddingTop:"20px" }}>
          <div style={{ width:"60%", borderRight:"1px solid #3399cc" }}> 
            {mainContent}
          </div>
          <div style={{ width:"40%" }}> 
            {sideContent}
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Layout;
