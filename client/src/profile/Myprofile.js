import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";
import logo1 from "./logo.png";
import "./Myprofile.css";
const Myprofile=(props)=> {
    return (
      <div class="setbackgrnd">
        <div class="card class1" style={{ width: "20rem" }}>
          {/* <img src={logo1} class="card-img-top bgrnd" alt="..."/> */}
          <img
            src={logo}
            class="card-img-top class2"
            alt="..."
            style={{
              borderRadius: "50px !important",
              width: "10rem",
              height: "10rem"
            }}
          />
          <div class="card-body">
            <p class="card-text myname">
              <h4>{props.userarr.userName}</h4>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Myprofile;
