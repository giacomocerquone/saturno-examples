import React from "react";

const CatInfo = ({ info }) => {
  return (
    <div style={{ margin: "4em" }}>
      <p>{info.name}</p>
      <p>{info.description}</p>
      <p>{info.country}</p>
    </div>
  );
};

export default CatInfo;
