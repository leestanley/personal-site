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
        <QueueAnim interval={200} duration={1000}>
          <div key="1">
            <img src={face} width="175" alt="" />
            <h1>Stanley Lee</h1>
          </div>
          <div key="2">
            <p>My website is still in progress, contact me below!</p>
          </div>
          <div id="icons" key="3">
            <a key="1" href="https://www.linkedin.com/in/leestanleysg/">
              <Icon type="linkedin" />
            </a>
            <a key="2" href="https://github.com/leestanley">
              <Icon type="github" />
            </a>
            <a key="3" href="mailto:stl005@ucsd.edu">
              <Icon type="mail" />
            </a>
          </div>
          <Button
            onClick={() => window.open(resume, "_blank")}
            type="primary"
            shape="round"
            key="4"
          >
            Download Resume
          </Button>
        </QueueAnim>
      </div>
    );
  }
}

export default App;
