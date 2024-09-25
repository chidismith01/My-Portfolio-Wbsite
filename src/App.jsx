/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Chidi Smith",
  title: "Brand Expert & Web Deesigner",
  email: "chidismith01@gmail.com",
  gitHub: "chidismith01",
  instagram: "https://www.instagram.com/4cuzstudios/",
  linkedIn: "https://www.linkedin.com/in/emereuwachidiebere/",
  medium: "",
  twitter: "https://x.com/ebyeast",
  youTube: "https://www.youtube.com/channel/UCfuiTTIhJbk00ZK4Slr_oxg",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
