import React from "react";
import Layout from "../components/layout";

const RegisterPage = () => {
  return (
    <Layout pageTitle="Register">
      <div style={{ textAlign:'center' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSccBhlRR1Yh2ZnvXHqq8YSxLwQ5agH57a0ILHp9XRuEg7uDUA/viewform?embedded=true"
          width="500"
          height="1140"
          frameborder="0"
          title="Registration Google Form"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
};

export default RegisterPage;
