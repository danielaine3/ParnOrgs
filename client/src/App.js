import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import RegistrationForm from './components/Users/RegistrationForm';
//Pages
import NoMatch from './pages/NoMatch';

class App extends Component {


  render() {
    return (
      <Router>
      <Wrapper>
      	<Navbar onLogin={this.handleLogin} currentUser={this.state.currentUser} pageTitle={this.state.currentPage} />
          {this.state.currentUser && this.state.currentUser.username ?
        <div>
          <Header />
          <main>
            <div />
            <Switch>
              <Route exact path="/" render={() => <Journal {...this.state} />} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          </div>
          : // user is not logged in
          <div>
            <div />
            <Route path="/" render={() => <RegistrationForm onLogin={this.handleLogin} {...this.state} />} />
          </div>
  }



        
        <Footer />
      </Wrapper>
      </Router>
    );
  }
}

export default App;
