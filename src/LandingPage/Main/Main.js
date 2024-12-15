import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Main = () => {
  return (
    <div className="main-container" style={{ marginLeft: "187px" }}>
      <div >
        <h1>Technical Project Management</h1>
      </div>
      <div className="explore">
        <h2>Explore the world of management</h2>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      <div className="row" style={{ marginTop: "120px" }}>
        <div className="col-6">
          <Card1 />
        </div>
        <div className="col-6">
          <Card2 />
        </div>
       
      </div>
      <div className="row" style={{ marginTop: "650px" }}>
      <div className="col-6">
          <Card3 />
        </div>
        <div className="col-6">
          <Card4 />
        </div>
      </div>
      
    </div>
  );
};

export default Main;
