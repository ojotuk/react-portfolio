import React from "react";
import Typical from "react-typical";

function TypeWritterText(props) {
  return (
    <div className="typeWritterWrapper">
      <h3>I'm a </h3>
      <Typical
        steps={["Fullstack Developer", 5000, "Researcher", 5000]}
        loop={Infinity}
        wrapper="h3"
      />
    </div>
  );
}

export default TypeWritterText;
