import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="stackedOpt">
        <div className="image-container">
          <img src="Images/questionmark.png" alt="Image 1" className="image1" />
          <img src="Images/Ellipse198.png" alt="Image 2" className="image2" />
        </div>
      </div>

      <div className="stackedOpt">
        <div className="image-container">
          <img src="Images/meeting.png" alt="Image 1" className="image1" />
          <img src="Images/Ellipse199.png" alt="Image 2" className="image2" />
        </div>
      </div>

      <div className="stackedOpt">
        <div className="image-container">
          <img src="Images/schedule.png" alt="Image 1" className="image1" />
          <img src="Images/Ellipse200.png" alt="Image 2" className="image2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
