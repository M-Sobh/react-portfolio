import React from "react";
import Hero from "../components/Hero";
import Zoom from "react-reveal/Zoom";

function HomePage(props) {
  return (
    <Zoom>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
    </Zoom>
  );
}

export default HomePage;
