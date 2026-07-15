import { useEffect } from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

import About from "./About";
import WhatIDo from "./WhatIDo";
import Career from "./Career";
import Work from "./Work";
import Contact from "./Contact";
import TechStack from "./TechStack";

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => {};
    window.addEventListener("resize", resizeHandler, { passive: true });
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      <div className="container-main">
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <Work />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
