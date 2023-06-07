import React from "react";
import Layout from "../components/layout";
import { Section } from "../components/section";
import pdfile from "../../public/static/p1.pdf";
import homepic from "../../public/static/homepic.jpg";

const IndexMainContent = () => {
  return(
    <div>
      <img src={homepic} alt="home" />
      <Section title="Editorial Team" borderColor="#ffffff">
        <ul>
          <li>Dr. Yogesh Reddy</li>
        </ul>
      </Section>

    </div>
  );
};

const IndexSideContent = () => {
  return(
    <div style={{ color:"#3399cc", fontWeight:"bold", padding:"20px" }}>
      Publications
      <br></br>
      <br></br>
      <a href={pdfile} target="_blank" rel="noreferrer" class="pdf">
        A new Proteocephalidean tapeworm, Gangesia (Gangesia) pentakalisis n.sp. from fresh water cat fish, Wallago attu at Pentakali Dam, Dist, Buldhana (M.S.), India
      </a>
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
