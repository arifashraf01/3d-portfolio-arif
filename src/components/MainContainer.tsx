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
  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <TechStack />
      <Contact />
    </div>
  );
};

export default MainContainer;
