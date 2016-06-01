import React, { Component } from 'react';

const Header = () => {
  return <div>This is the Header</div>
}

const Footer = () => {
  return <div>This is the Footer</div>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
