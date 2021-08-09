import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      {/* <HeroBg/> */}
      <HeroContent>
        <HeroH1>Looking for research opportunities?</HeroH1>
        <HeroP>
          Klaboi is a research opportunity discovery portal that helps connect
          students and professors.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/Register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
