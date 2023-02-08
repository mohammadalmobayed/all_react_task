import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footerStyles = {
      background: 'black',
      color: 'white',
      fontSize: '18px',
      textAlign: 'center',
      position: 'fixed',
      bottom:"0",
      width: '100%'
    //   padding: '10px'
    //   padding: '10px'
    //   padding: '10px'
    //   padding: '10px'
    
    };
    return (
      <footer style={footerStyles}>
        <h1>Footer</h1>
      </footer>
    );
  }
}

export default Footer;