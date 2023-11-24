import React, { Component } from 'react';
import Main from '../MainContainer/Main';
import './sideBar.css';

const inputIds = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

class SideBar extends Component {
    
    // const {handleCreateClick} = this.props;

  onClickCreate = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('.input-form');
    const inputValue = input.value;     
    this.props.handleCreateClick(id, inputValue);
  };

  render() {
    return (
      <div className="side-bar-container">
        <h1 className="side-bar-head">Create your comic Strip </h1>
        {inputIds.map((eachItem) => (
          <form className="form" key={eachItem.id} onSubmit={(e) => this.onClickCreate(e, eachItem.id)}>
            <span className="count">{eachItem.id}</span>
            <input type="text" className="input-form" placeholder='Enter the text' />
            <button type="submit" className="create-btn">
              Create
            </button>
          </form>
        ))}
      </div>
    );
  }
}

export default SideBar;
