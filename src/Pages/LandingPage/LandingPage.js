import React from "react";

import InfoSection from "../../components/InfoSection/InfoSection";
import ValueSection from "../../components/ValueSection/ValueSection";
import { LandingPageObjOne, LandingPageObjTwo } from "./Data";

const LandingPage = () => {
  return (
    <>
      <InfoSection {...LandingPageObjOne} />
      <ValueSection {... LandingPageObjTwo} />
    </>
  );
};

export default LandingPage;
