import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function About() {
  return (
    <Layout pageTitle="About Us">
      <div style={{ margin: 20 }}>
        <p style={{ color: "dimgrey", textAlign: "justify" }}>
          <div id="aevrt" style={{ scrollMarginTop: "2em" }}>
            <div
              style={{
                height: 50,
                width: 75,
                float: "left",
                margin: "-5px 10px 15px 10px",
              }}
            >
              <StaticImage src="../images/avert.png" alt="" />
            </div>
            AEVRT - Academy of Electric Vehicles Research and Technology is an
            initiative of KBP Trust and IEAS. The Academy was formed with an
            objective of promoting E-Vehicles as a primary means of daily
            commute and other terrestial transport requirements. E-Vehicles will
            play a very important role in EV aggregator fleet companies, food &
            other commodity deliveries. Inter-city transport, etc. In the very
            near future, EVs will replace today's petrol and diesel vehicles and
            contribute towards reducing the damage to the environment due to
            carbon emissions and other type of pollutions created by petrol and
            diesel engines. This segment will require a large workforce to cater
            to its production, maintenance, service and repairs. Professional
            grade training for this industry is the need of the hour, as it will
            create millions of employment and self-employment opportunities.
          </div>
          <br />
          <br />
          <div id="kbp" style={{ scrollMarginTop: "3em" }}>
            <div
              style={{
                height: 50,
                width: 75,
                float: "left",
                margin: "-5px 10px 40px 10px",
              }}
            >
              <StaticImage src="../images/kbp.jpg" alt="" />
            </div>
            Institute of Engineering & Applied Sciences-Mumbai (IEAS) is a
            member of the KBP Public Educational Consortium registered under the
            Bombay Public Trust Act 1949 (Govt of Maharashtra). Since the last
            20 years, the organization has been actively engaged in education,
            community welfare and vocational training in Maharashtra. With a
            vision of reaching out to the youth in rural and sub-rural areas,
            and providing them training, employment, and self-employment
            opportunities.
          </div>
          <br />
          <br />
          <div id="ieas" style={{ scrollMarginTop: "2em" }}>
            <div
              style={{
                height: 50,
                width: 100,
                float: "left",
                margin: "-5px 10px 15px 0px",
                marginBottom: 20,
              }}
            >
              <StaticImage src="../images/ieas.png" alt="" />
            </div>
            IEAS is a pioneering institution in technical vocational training
            sector since last 21 years, the institute has developed and
            conducted several training programmes in Telecom, Electro-Mechanical
            Services, HVAC-MEP & Building Management Services (BMS), Piping
            design, Two & Four Wheeler Maintenance and repairs, CCTV, biometrics
            and E-Security. For several Government, Semi-Government, Corporate
            and Industrial entities.
          </div>
          <br />
          <br />
          <div id="ahsap" style={{ scrollMarginTop: "2em" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px 10px 20px 10px",
                float: "left",
              }}
            >
              <div style={{ height: 50, width: 75 }}>
                <StaticImage src="../images/ahsap.png" alt="" />
              </div>
              <div style={{ height: 50, width: 75 }}>
                <StaticImage src="../images/bonent.png" alt="" />
              </div>
              <div style={{ display: "block", marginBottom: -60 }}>
                <div style={{ height: 50, width: 75 }}>
                  <StaticImage src="../images/np.png" alt="" />
                </div>
                <div
                  style={{ height: 50, width: 75, margin: "-20px 0px 0px 0px" }}
                >
                  <StaticImage src="../images/enpedia.png" alt="" />
                </div>
              </div>
            </div>
            Academy of Health Sciences and Advanced Paramedics (AHSAP) is their
            Paramedical & Medical Training division which conducts India's most
            prestigious "BONENT (USA) Certified and Approved" dialysis training
            programme in India and South East Asia in collaboration with
            Nephrocare Health Services - brand owners of "Nephroplus - Network
            of dialysis centres and Enpidia dialysis training programme.
          </div>
          <br />
          <br />
          <StaticImage src="../images/coll1.png" alt="" />
          <StaticImage src="../images/coll2.png" alt="" />
          <StaticImage src="../images/coll3.jpg" alt="" />
        </p>
      </div>
    </Layout>
  );
}

export default About;
