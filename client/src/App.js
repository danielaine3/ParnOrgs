import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {


  render() {
    return (
      <Wrapper>
      	<Navbar />
        <Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
