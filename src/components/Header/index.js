import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';

class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hop to It</h1>
        <p>Search for and save your favorite beers around the world!</p>
      </Jumbotron>
    );
  }
}

export default Header;
