  import React, { Component } from 'react';
  import { Icon, Button } from 'antd';
  import './App.css';
  import face from './photo.png'

  class App extends Component {
    render() {
      const resume = 'https://drive.google.com/file/d/1cEU7myTYPqcKQYlQvNRfn6wLqVFRTdLb/view'
      return (
        <div className="container">
          <div className="content">
            <img src={face} width="175" alt=""/>
            <h1>Stanley Lee</h1>
            <p>My website is still in progress, contact me below!</p>
              <div id='icons'>
                <a href="https://www.linkedin.com/in/leestanleysg/">
                  <Icon type="linkedin"/>
                </a>
                <a href="https://github.com/leestanley">
                  <Icon type="github"/>
                </a>
                <a href="mailto:stl005@ucsd.edu">
                  <Icon type="mail"/>
                </a>
              </div>
              <Button onClick={() => window.open(resume, "_blank")} className='buttons' type="primary" shape="round">Download Resume</Button>
          </div>
        </div>
      );
    }
  }

  export default App;
