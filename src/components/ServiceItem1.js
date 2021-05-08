import React from "react";
import { FaGithub } from "react-icons/fa";
import "../App.css";

function ServiceItem1() {
  return (
      <div className="services__box">
        <FaGithub className="common-icons" />
        <div className="services__box-header">Web development</div>
        <div className="services__box-p">
          It is defined as the connections test test test test 
        </div>
    </div>
  );
}

export default ServiceItem1;
