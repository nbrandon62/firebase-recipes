import React from "react";

import './styles/jumbotron.css'


const Jumbrotron = ({header}) => {
  return (
    <div className='jumbotron'>
      <p className="jumbotron__content">{header}</p>
    </div>
  );
};

export default Jumbrotron;
