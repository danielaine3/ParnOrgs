import React, { Component } from 'react';
import "./Navbar.css";
import API from '../../utils/API';

class Navbar extends Component {
  state = {
    username: '',
    password: '',
    open: false,
  };

  componentDidMount() {
    API.getCurrentUser().then((response) => {
      const currentUser = response.data.user;
      this.props.onLogin(currentUser);
    });
  }

  // open login modal
  handleClickOpen = () => { this.setState({ open: true }); };
  // close login modal
  handleClose = () => { this.setState({ open: false }); };
  // update username / password state on input change
  handleInputChange = event => this.setState({ [event.target.name]: event.target.value })
  // click 'login' form button
  submitForm = (event) => {
    event.preventDefault();
    // sample error handling, make sure username and password are present
    if (this.state.password.length < 1 && this.state.username.length < 1) {
      throw new Error('Bad login info. This is a crappy error message');
    }
    // create object containing username/password from the components state
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    // attempt login
    API.loginUser(data)
      .then((response) => {
        // get user from response
        const { user } = response.data;
        // reset username and password fields
        this.setState({ username: '', password: '' });
        // pass user information to App.js
        this.props.onLogin(user);
        // close dialogue
        this.handleClose();
      })
      .catch(err => console.log('error on login', err));
  }

  logoff = (event) => {
    event.preventDefault();
    API.logoutUser().then(this.props.onLogin('null'));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="navbarContainer">
        <img id="brand" alt="Parnassus Logo" src="/assets/images/Logo.jpg" />
        <div
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div>
            <form className='login'>
              <div id="loginTitle">Login</div>
              <input type="text" placeholder="Username" label="Username" name="username" value={this.state.username} onChange={this.handleInputChange}/>
              <br />
              <input placeholder="Password" label="Password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
              <br />
              <button onClick={this.submitForm} color="primary" autoFocus>
                Login
              </button>
              <button onClick={this.handleClose} color="primary">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default (Navbar);
