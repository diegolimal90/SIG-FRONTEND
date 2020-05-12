import React, { Component } from 'react';
import Header from "./components/fragment/Header";
import Footer from "./components/fragment/Footer";
import SubRoutes from './config/subRoutes';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <div className="container dashboard">
            <SubRoutes />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
