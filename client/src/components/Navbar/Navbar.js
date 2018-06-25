import React, { Component } from 'react';
import "./Navbar.css";
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// // from Material, used to inject an array of styles into the DOM
// import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField';
// import Typography from 'material-ui/Typography';
// import Dialog, {
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from 'material-ui/Dialog';
import API from '../../utils/API';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   appFrame: {
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'fixed',
//     // width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

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
      <div>
        <div>
          <div>  
            {/*  Logo */}
            {this.props.currentUser && this.props.currentUser.username ?
              <div variant="title" color="inherit" style={{ flex: 1 }} noWrap>{this.props.pageTitle}</div>
            :
              <div variant="title" color="inherit" style={{ flex: 1 }}>Intl.Intern</div>
            }
            { this.props.currentUser && this.props.currentUser.email ? 
              <div>
                <div color="inherit" variant="subheading" style={{display: 'inline-block', paddingRight: '10px'}}>
                  {this.props.currentUser.email}
                </div>
                <button color="inherit" onClick={this.logoff}>Logoff</button>
              </div> :
              <button color="inherit" onClick={this.handleClickOpen}>Login</button>
            }
          </div>
        </div>
        {/* login modal begin */}
        <div
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div id="alert-dialog-title">Login</div>
          <div>
            <form>
              <text
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <text
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
          <div>
            <button onClick={this.handleClose} color="primary">
              Cancel
            </button>
            <button onClick={this.submitForm} color="primary" autoFocus>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default (Navbar);
