import React from "react";
import "../styles/Header.css";
import headergirls from "../assets/headerGirls.png";
import backboy from "../assets/backboy.png";
import frontGirl from "../assets/frontgirl.png";

import human1 from "../assets/human1.jpg"
import human2 from "../assets/human2.jpg"
import human3 from "../assets/human3.jpg"

function Header() {
  return (
    <div className="mainContainer">
      <div className="header">
      <a className="navbarEntry">Entry</a>
        <table>
          <tb>
            <tr>
              <td>
                <h3>Home</h3>
              </td>
              <td>
                <h3>Features</h3>
              </td>
              <td>
                <h3>Resource</h3>
              </td>
              <td>
                <h3>Company</h3>
              </td>
            </tr>
          </tb>
        </table>
        <div className="sign">
          <button className="btnsignup">Sign Up </button>
        </div>
      </div>
    <div className="headercolumn">
      <div className="headertext" alt="column">
        <h1>
          DISCOVER AN AMAZING <br /> NFT COLLECTION
        </h1>
        <p>
          <br/>
          A good NFT project Will Have Community Following them .<br /> The Ones
          With the Most Engagement Are Usually <br /> The Projects Which Will Be
          Most Successfull. <br /> NFTs Are The More than just Owning a piece of
          Art.
          <br /> They Are Being Part Of A Community .<br /> Where A Culture Has
          Been Created, And Culture Creates A following{" "}
        </p>
      </div>

      <div className="heardergirls" alt="column">
          <img src={backboy} alt="image1" className="image1" />
          <img src={frontGirl} alt="image2" className="image2" />
          </div>
    </div>
    <div className="search">
          <br/>
      
          <input placeholder="What are you looking For " className="searchinput"/>
          <button className="btnsearch">Sign Up </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <div className="added">
          <div>
            <ul>
              <li>320+</li>
              <li>
                Project
                <br /> Done{" "}
              </li>
            </ul>
            <ul>
              <li>60+</li>
              <li>
                Creative <br />
                People{" "}
              </li>
            </ul>
            <ul>
              <li>200+</li>
              <li>
                Happy
                <br /> Client{" "}
              </li>
            </ul>
            <br/>
            <br/>
          </div>
          <br/>

          <div className="creative">
            <h1>CREATIVE BY |</h1>

            <img src={human1} alt="search"  className="rounded"/>
            <img src={human2} alt="search" className="rounded" />
            <img src={human3} alt="search" className="rounded" id="circle" />
            <h4 className="views">View Team</h4>
          </div>
         

        </div>

    </div>
    
  );
}

export default Header;
