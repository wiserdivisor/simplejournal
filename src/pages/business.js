import React from "react";
import Layout from "../components/layout";
import { Section, SectionHeader } from "../components/section";
import { StaticImage } from "gatsby-plugin-image";
import businessData from "../data/business_data.json";
import homeData from "../data/home_data.json";

function Business() {
  const partnerDesc = businessData.partner_desc;
  const trainFranP1 = businessData.train_fran_p1;
  const trainFranP2 = businessData.train_fran_p2;
  const whoP1 = businessData.who_p1;
  const whoP2 = businessData.who_p2;
  const projConsulDesc = businessData.proj_consul_desc;
  const projConsulListHead = businessData.proj_consul_list_head;
  const projConsulList = businessData.proj_consul_list;
  const hireP1 = homeData.join_rev;
  const hireP2 = homeData.scope.part1;

  return (
    <Layout pageTitle="Business">
      <Section title="Partner with us - Be our franchise" idName="partner">
        <StaticImage
          src="../images/hs2"
          alt="Franchise"
          style={{ borderRadius: 10 }}
        />
        <br />
        <br />
        {partnerDesc}
        <br />
        <br />
        <SectionHeader title="AEVRT Training Franchise" idName="train_fran" />
        <br />
        {trainFranP1}
        <br />
        <br />
        {trainFranP2}
        <br />
        <br />
        <SectionHeader title="Who can be a franchise?" idName="who_fran" />
        <br />
        {whoP1}
        <br />
        <br />
        {whoP2}
        <a
          href="mailto:aevrt.india@gmail.com"
          style={{ textDecoration: "none" }}
        >
          aevrt.india@gmail.com
        </a>
      </Section>
      <Section title="Project Consultancy">
        <StaticImage
          src="../images/consult.png"
          alt=""
          style={{ borderRadius: 10 }}
        />
        <p>
          {projConsulDesc}
          <br />
          <br />
          <b>{projConsulListHead}</b>
          <ul style={{ marginLeft: -25 }}>
            {projConsulList.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </p>
      </Section>
      <Section title="Hire our trained man-power">
        <StaticImage
          src="../images/trainees.jpg"
          alt=""
          style={{ borderRadius: 10 }}
        />
        <br />
        <br />
        India is headed towards becoming a manufacturing hub for electric
        vehicles in the next five years. The EV industry growth is estimated at
        Rs.500 billion by 2025. This industry will require large numbers of
        skilled, semi-skilled, assemblers/workers, supervisors, engineers,
        quality-contol staff, material and inventory staff.
        <br />
        <br />
        Presently the Electric Vehicle industry is experiencing an acute
        shortage of manpower with skills at par with the industry's standard
        requirements. EV-OEM's are aggressuvely gearing up to increase their
        production capacity. As a result there will be a sharp increase in the
        demand for trained manpower in the EV industry.
        <br />
        <br />
        AEVRT's specialised EV training programs impart EV industry specific
        skill-based training for manpower at all levels, keeping in mind the
        skill requirements of small, medium and large-scale EV industries. The
        training modules include comprehensive training in technical skills
        (mechanical & electrical), line and table assembly, material handling,
        tool handling, testing and measuring equipment, quality control, design
        and development, commercial training and other allied soft-skills.
        <br />
        <br />
        Companies can benefit from hiring this trained workforce, by means of
        early productivity, minimal product training, prevention of losses due
        to rework and parts damages.
      </Section>
    </Layout>
  );
}

export default Business;
