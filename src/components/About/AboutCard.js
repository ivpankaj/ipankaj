import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">PANKAJ </span>
            from <span className="purple"> Greater Noida, India.</span>
            <br />
            <br/>
            I was born in Kushinagar, Uttar Pradesh , I have done my schooling while living in Delhi NCR with my family.
            <br/>
            <br />
            I am pursuing Bachelors in Computer Science and Engineering from 
            IIMT Engineering College, Meerut
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watch Movies
            </li>
            <li className="about-activity">
              <ImPointRight />Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
