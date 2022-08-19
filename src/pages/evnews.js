import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/whyev.css";
import VisitSite from "../components/visitSiteButton";

function EvNews() {
  return (
    <Layout pageTitle="EV News">
      <div style={{ textAlign: "center" }}>
        <div>
          <StaticImage src="../images/news1.png" alt="" className="newsImg" />
          <br />
          <a
            href="https://www.businesstoday.in/current/economy-politics/e-vehicles-industry-electric-mobility-mission-create-10-million-jobs-in-future/story/346804.html"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <VisitSite />
          </a>
        </div>
        <div>
          <StaticImage src="../images/news2.png" alt="" className="newsImg" />
          <br />
          <a
            href="https://www.businesstoday.in/sectors/auto/ola-focuses-on-two-and-three-wheelers-for-ev-adoption-4-wheeler-to-take-time/story/345752.html"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <VisitSite />
          </a>
        </div>
        <div>
          <StaticImage src="../images/news3.png" alt="" className="newsImg" />
          <br />
          <a
            href="https://www.businesstoday.in/top-story/mm-to-deploy-50-electric-vehicles-on-uber-platform/story/340411.html"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <VisitSite />
          </a>
        </div>
        <div>
          <StaticImage src="../images/news4.png" alt="" className="newsImg" />
          <br />
          <a
            href="https://www.businesstoday.in/sectors/banks/sbi-car-loan-electric-vehicles-interest-rate-reduced-repayment-period-relaxed/story/339671.html"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <VisitSite />
          </a>
        </div>
        <div>
          <StaticImage src="../images/news5.png" alt="" className="newsImg" />
          <br />
          <a
            href="https://www.businesstoday.in/top-story/india-could-achieve-high-penetration-of-electric-vehicles-by-2030-niti-aayog/story/334573.html "
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <VisitSite />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default EvNews;
