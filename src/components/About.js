import React from "react"; 
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {(props.hasOwnProperty("bio") && props.bio != "") ? 
      <p>{props.bio}</p> : true }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links = {props.links}/>
    </div>
  );
}

export default About;
