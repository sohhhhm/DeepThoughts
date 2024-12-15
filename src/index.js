import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./LandingPage/Header/Header";
import Main from "./LandingPage/Main/Main";
import ExpandableNavbar from "./LandingPage/Navbar/Navbar";
import Footer from "./LandingPage/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <Header />
      <ExpandableNavbar/>
      <Main />
<Footer/>
  </React.StrictMode>
);
