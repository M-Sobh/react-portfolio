import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Bounce from "react-reveal/Bounce";

function AboutPage(props) {
  return (
    <div>
      <Bounce top>
        <Hero title={props.title} />
      </Bounce>
      <Bounce right>
        <Content>
          <p>
            Hello, my name is Mohamed Sobh. I am a front end web developer with
            experience in React,Redux,React
            hooks,javascript,APIs,Sass,Bootstrap.
          </p>
          <p>
            My dream is to one day start my own business and become an
            entrepreneure(currently working on some ideas).
          </p>
          <p>
            I'm constantly learning new things. currently working towards
            becoming a fullstack engineer by getting my hands on some node.js,
            express.js, MongoDB
          </p>
          <p>
            When I'm not learning something new chances are I'm planning for new
            ideas.
          </p>
        </Content>
      </Bounce>
    </div>
  );
}

export default AboutPage;
