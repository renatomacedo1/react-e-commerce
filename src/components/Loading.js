import React from "react";
import spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <div className="section section-center">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Loading;
