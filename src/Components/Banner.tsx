import React from "react";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
import {BsPatchCheckFill} from "react-icons/bs"

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://images5.alphacoders.com/904/904591.png"
        alt="Artist image"
        className="bannerImg"
      />
      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <BsPatchCheckFill className="check"/>
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="#"> Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
}

export default Banner;
