import * as React from "react";

const SectionHeader = ({
  title = "",
  headerColor = "#3399cc",
}) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ color: headerColor, fontWeight: "bold", fontSize: 20, marginBottom:"5px" }}>
          &nbsp;{title}
        </p>
      </div>
    </>
  );
};

const Section = ({
  idName,
  title,
  headerColor,
  borderColor = "#7ab9e4",
  textAlign = "justify",
  children,
}) => {
  return (
    <div
      id={idName}
      style={{ 
        textAlign: textAlign, 
        margin: "0px 0px 0px 0px", 
        padding: "0px 0px 0px 0px" }}>
      <SectionHeader title={title} headerColor={headerColor} />
      <div style={{ color: "dimgrey", fontSize: 14, borderBottom:"1px solid "+borderColor }}>
        {children}
      </div>
    </div>
  );
};

export { Section, SectionHeader };
