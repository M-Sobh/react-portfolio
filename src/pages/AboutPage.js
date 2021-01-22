import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Mohamed Sobh. I am a front end web developer with
          experience in React,Redux,React hooks,javascript,APIs,Sass,Bootstrap.
        </p>
        <p>
          My dream is to one day start my own business and become an
          entrepreneure(currently working on some ideas).
        </p>
        <p>
          I'm constantly learning new things. currently working towards becoming
          a fullstack engineer by getting my hands on some node.js, express.js,
          MongoDB
        </p>
        <p>
          When I'm not learning something new chances are I'm planning for new
          ideas.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
