import React from 'react';
import { RouteHandler } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}
