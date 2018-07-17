import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import RegistrationForm from './components/Users';
//Pages
import NoMatch from './pages/NoMatch';
// import Registration from './pages/Registration';
import Signups from './pages/Signups';

if (process.env.NODE_ENV !== 'production') require('dotenv').config({slient:true});

class App extends React.Component {

  state = {
    currentUser: '',
    currentPage: '',
  };

  // pass to TopNav component
  handleLogin = (currentUser) => {
    // console.log('in App.handleLogin, user is ', currentUser);
    this.setState({ currentUser });
    if (!currentUser) {
      window.history.pushState({},"", '/');
    }
  }
  // pass to Sidebar component
  pageChange = (currentPage) => {
    this.setState({ currentPage });
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <React.Fragment>
            <Wrapper>
              <div>
                <Navbar onLogin={this.handleLogin} currentUser={this.state.currentUser} pageTitle={this.state.currentPage} />
                <Header />
                {this.state.currentUser && this.state.currentUser.username ?
                  <div>
                    <main>
                      <Switch>
                        <Route exact path="/" render={() => <Signups {...this.state} />} />
                        <Route exact path="/Signups" render={() => <Signups {...this.state} />} />
                        <Route component={NoMatch} />
                      </Switch>
                    </main>
                  </div>
                : // user is not logged in
                  <div>
                    <Route exact path="/" render={() => <RegistrationForm onLogin={this.handleLogin} {...this.state} />} />
                  </div>
                }
                <Footer />
              </div>
            </Wrapper>
        </React.Fragment>
      </Router>
    );
  }
}

export default (App);
