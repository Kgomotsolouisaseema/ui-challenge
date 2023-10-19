import React from "react";
import "../styles/Content.css"; // Import the corresponding CSS file
import companyNames from "../assets/companyNames.png";
import image1 from "../assets/img1.png"
import image2 from "../assets/img2.png"
import image3 from "../assets/img3.png"
import image4 from "../assets/img4.png"
import image5 from "../assets/img5.png"
import image6 from "../assets/img6.png"
import image7 from "../assets/img7.png"
import image8 from "../assets/img8.png"

function Content() {
  return (
    <div className="contentmain">
      <div className="companynames">
        <img src={companyNames} alt="companynames" />
      </div>

      <div className="coloumnimages">
      <img src={image1} />
      <h1>hello text</h1>
      <img src={image2} />
      <img src={image3} />
      <img src={image4}  />
      <img src={image5}  />
      <img src={image6} />
      <img src={image7}  />
      <img src={image8}  />

      </div>

    </div>
  );
}

export default Content;
