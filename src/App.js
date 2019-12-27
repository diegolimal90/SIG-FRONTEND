import React, { Component } from 'react';
import Header from "./components/fragment/Header";
import Footer from "./components/fragment/Footer";
import SubRoutes from './config/subRoutes';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container dashboard">
            <SubRoutes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
