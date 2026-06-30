import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

const About = lazy(() => import("./About"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Career = lazy(() => import("./Career"));
const Work = lazy(() => import("./Work"));
const Contact = lazy(() => import("./Contact"));
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
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
      {isDesktopView && children}
      <div className="container-main">
        <Landing>{!isDesktopView && children}</Landing>
        <Suspense fallback={null}>
          <About />
          <WhatIDo />
          <Career />
          <Work />
          {isDesktopView && <TechStack />}
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default MainContainer;
