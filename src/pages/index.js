import React from "react";
import Layout from "../components/layout";
import { Section } from "../components/section";

const IndexMainContent = () => {
  return(
    <div>

      <Section title="Editorial Team" borderColor="#ffffff">
        <ul>
          <li>Team Member A</li>
          <li>Team Member A</li>
          <li>Team Member A</li>
          <li>Team Member A</li>
          <li>Team Member A</li>
          <li>Team Member A</li>
        </ul>
      </Section>

    </div>
  );
};

const IndexSideContent = () => {
  return(
    <div style={{ color:"#3399cc", fontWeight:"bold", padding:"20px" }}>
      Publications
    </div>
  );
};

const HomePage = () => {

  return (
    <Layout 
      pageTitle="Digital Journal of Science and Technology" 
      pageSubTitle="A KBP Trust & Institute of Engineering and Applied Sciences Initiative"
      mainContent={<IndexMainContent />}
      sideContent={<IndexSideContent />} />
  );
};

export default HomePage;
