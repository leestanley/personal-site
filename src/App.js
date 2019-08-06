  import React, { Component } from 'react';
  import { Icon } from 'antd';
  import './App.css';
  import face from './photo.png'

  class App extends Component {
    render() {
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
          </div>
        </div>
      );
    }
  }

  export default App;
