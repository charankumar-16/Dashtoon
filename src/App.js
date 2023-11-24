
import React, { Component } from 'react';
import './App.css';
import Main from './Componenets/MainContainer/Main';
import SideBar from './Componenets/sideBar/sideBar';

class App extends Component {
  state = {
    id: null,
    prompt: '',
  };

  handleCreateClick = (id, prompt) => {
  
    this.setState({ id, prompt });
  };

  render() {
    const {id, prompt} = this.state;
    console.log(id);
    console.log(prompt);
    return (
      <div>
        <div className="top-container">
          <h1 className="heading"> Comic Creator</h1>
          <button type="button" className="share-btn">Share</button>
        </div>        
        <div className="bottom-container">
          <div className="side-navbar">
            <SideBar handleCreateClick={this.handleCreateClick} />
            <p className="copyrights"> Made by Charan Kumar</p>
          </div>

          <div className="main-container">
            <Main id={id} prompt={prompt} /> 
          </div>         
        </div>
      </div>
    );
  }
}

export default App;