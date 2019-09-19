import React, { Component } from "react";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";
import "./App.css";

import face from "./assets/photo.png";

const DevSvg = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.49996 2.83334L0.885376 17L8.49996 31.1667H25.5L33.2307 17L25.5 2.83334H8.49996ZM11.3333 9.91667L18.6107 9.928C20.5034 10.1929 24.0833 12.0034 24.0833 17C24.0833 21.9966 20.5034 23.8071 18.6107 24.0663L18.5115 24.0833H11.3333V9.91667ZM14.1666 12.75V21.25H18.2948C18.8147 21.1452 21.25 20.4638 21.25 17C21.25 13.5518 18.8487 12.8605 18.2891 12.75H14.1666Z"
      fill="#1890FF"
    />
  </svg>
);

const DevpostIcon = props => <Icon component={DevSvg} {...props} />;

class App extends Component {
  render() {
    const resume =
      "https://drive.google.com/file/d/1cEU7myTYPqcKQYlQvNRfn6wLqVFRTdLb/view";
    return (
      <div className="content">
        <div className="face">
          <img src={face} alt="face" width="175" height="175" />
          <h1>Stanley Lee</h1>
        </div>
        <QueueAnim delay={200} interval={250} duration={1500}>
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
            <a href="https://devpost.com/leestanley">
              <DevpostIcon className='devpost' />
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
