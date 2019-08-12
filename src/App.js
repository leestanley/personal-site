import React, { Component } from "react";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import "./App.css";
import face from "./photo.png";

class App extends Component {
  render() {
    const resume =
      "https://drive.google.com/file/d/1cEU7myTYPqcKQYlQvNRfn6wLqVFRTdLb/view";
    return (
      <div className="content">
        <div>
          <img src={face} alt="face" width="175" height="175" />
          <h1>Stanley Lee</h1>
        </div>
        <QueueAnim delay ={200} interval={250} duration={1500}>
          <div key="1">
            <p>My website is still in progress, contact me below!</p>
          </div>
          <div id="icons" key="2">
            <a href="https://www.linkedin.com/in/leestanleysg/">
              <Icon type="linkedin" />
            </a>
            <a href="https://github.com/leestanley">
              <Icon type="github" />
            </a>
            <a href="mailto:stl005@ucsd.edu">
              <Icon type="mail" />
            </a>
          </div>
          <Button
            onClick={() => window.open(resume, "_blank")}
            type="primary"
            shape="round"
            key="3"
          >
            Download Resume
          </Button>
        </QueueAnim>
      </div>
    );
  }
}

export default App;
