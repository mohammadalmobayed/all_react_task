import React, { Component } from 'react';

class Body extends Component {
  render()
   {
    const bodyStyles = {
      background: 'green',
      color: 'black',
      fontSize: '15px',
      textAlign: 'center',
      padding: '10px'
    };
    return (
      <div style={bodyStyles}>
        <h1>Body</h1>
        <h2>Nice Day </h2>
      </div>
    );
  }
}

export default Body;