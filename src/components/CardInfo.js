import React from "react";
import { useSpring, animated } from "react-spring";
function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <div className="demo-link">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Code
        </a>
        <br />
        <a href={props.demo} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </animated.div>
  );
}

export default CardInfo;
