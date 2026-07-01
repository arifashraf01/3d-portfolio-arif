import { useEffect, useState } from "react";
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
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
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
        {isDesktopView && <TechStack />}
        <Contact />
      </div>
    </div>
  );
};

export default MainContainer;
