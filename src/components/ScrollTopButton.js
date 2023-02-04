import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollTopButton = () => {
  return (
    <div style={{backgroundColor: '#fcede4',display: 'flex', justifyContent: 'flex-end', padding:'4rem', alignItems:'center'}}>
      <BsFillArrowUpCircleFill
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{fontSize:'50px', cursor: 'pointer'}}
      ></BsFillArrowUpCircleFill>
    </div>
  );
};

export default ScrollTopButton;
