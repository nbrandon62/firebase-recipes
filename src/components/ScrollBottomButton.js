import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const ScrollBottom = () => {
  return (
    <div
      style={{
        padding: '4rem',
        float:'right'
      }}
    >
      <BsFillArrowDownCircleFill
        onClick={() => {
          window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }}
        style={{ fontSize: "50px", cursor: "pointer" }}
      ></BsFillArrowDownCircleFill>
    </div>
  );
};

export default ScrollBottom;
