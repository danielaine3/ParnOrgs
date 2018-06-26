import React, { Component } from 'react';
// Material UI
// import { Button, TextField, Select, Typography, } from 'material-ui';
// import Input, { InputLabel } from 'material-ui/Input';
// import { MenuItem } from 'material-ui/Menu';
// import { FormControl, FormHelperText } from 'material-ui/Form';
// import Dialog, {
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from 'material-ui/Dialog';
// import Paper from 'material-ui/Paper';
// import Grid from 'material-ui/Grid';
// import { withStyles } from 'material-ui/styles';
// import Divider from 'material-ui/Divider';

import API from '../../utils/API';
// import util from '../../utils/util';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 4,
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     color: theme.palette.text.secondary,
//   },
//   divider: {
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   registerButton: {
//     display: 'flex',
//     marginLeft: 'auto',
//   }
// });


class RegistrationForm extends Component {
  state = {
    // currentUser: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    fullname: '',
    // homeLocationCity: '',
    // homeLocationCountry: '',
    // homeLocationCountryCode: '',
    // homeLocationCurrencyCode: '',
    // homeLocationTimezone: '',
    // homeLocationLatitude: '',
    // homeLocationLongitude: '',
    // internLocationCity: '',
    // internLocationCountry: '',
    // internLocationCountryCode: '',
    // internLocationCurrencyCode: '',
    // internLocationTimezone: '',
    // internLocationLatitude: '',
    // internLocationLongitude: '',
    // preferredUnits: 'imperial',
    // openWeatherCityCode: '',
    // countryCodeData: {},
    // countryCurrencyCodeData: {},
    // countryNameSuggestions: [],
    axiosCancelToken: null,
    error: '',
    open: false,
  }

  // componentDidMount() {
  //   this.loadCountryData();
  // }

  // componentWillUnmount() {
  //   if (this.state.axiosCancelToken) {
  //     this.state.axiosCancelToken.cancel();
  //   }
  // }

  // open login modal
  errDialogOpen = () => { this.setState({ open: true }); };
  // close login modal
  errDialogClose = () => { this.setState({ open: false }); };

  // loadCountryData() {
  //   const axiosReference = API.getAllCountryData();
  //   this.setState({ axiosCancelToken: axiosReference });
  //   axiosReference
  //     .promise
  //     .then((response) => {
  //       // console.log(response);
  //       const countryCodeData = response.data.countryCodes || {};
  //       const countryNameSuggestions = Object.keys(countryCodeData)
  //         .map(suggestion => ({
  //           value: suggestion,
  //           label: suggestion,
  //         }));
  //       // console.log('countryCodeData', countryCodeData, 'suggestions', countryNameSuggestions);
  //       this.setState({
  //         countryNameSuggestions,
  //         countryCodeData,
  //         countryCurrencyCodeData: response.data.countryCurrencyCodes
  //       });
  //     })
  //     .catch((err) => {
  //       // Error on request for country data. This could just be due to the request being canceled.
  //       // print is it is due to something other than the request being canceled
  //       if (err.isCanceled) {
  //         console.log('Axios request in RegistrationForm for getting country data canceled. This is normal');
  //       } else {
  //         this.setState({ error: 'Error on request for country data' });
  //         // launch error dialog
  //         this.errDialogOpen();
  //         console.error(this.setState.error, err);
  //       }
  //     });
  // }

  sendRegistrationData = () => {
    console.log('state: ', this.state);
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ error: 'Password and Password Confirmation do not match' });
      // launch error dialog
      this.errDialogOpen();
      return console.error(this.state.error);
    } else if (this.state.password.length < 6) {
      this.setState({ error: 'Password must be at least 6 characters long' });
      // launch error dialog
      this.errDialogOpen();
      return console.error(this.state.error);
    } else if (
      this.state.username.length < 1 ||
      this.state.email.length < 1 ||
      this.state.fullname.length < 1
    ) {
      this.setState({ error: 'One or more missing required fields' });
      // launch error dialog
      this.errDialogOpen();
      return console.error(this.state.error);
    }
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      fullname: this.state.fullname,
      
    };
    return API.registerUser(data)
      .then((response) => {
        const newUser = response.data.user;
        // send the new user data up to the App.js component
        console.log('newUser: ', newUser);
        this.setState({
          // currentUser: newUser,
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
          fullname: '',
        }, ((typeof this.props.onLogin === 'function') && this.props.onLogin(newUser)));
      })
      .catch(err => console.log('error on registration', err));
  }

  handleInputChange = event => this.setState({ [event.target.name]: event.target.value });

  handleInputChangeForAutoCompleteField = name => (value) => {
    // console.log('name, value', name, value);
    const dataToSet = {};
    dataToSet[name] = value;
    // console.log('new state data to set', dataToSet);
    this.setState(dataToSet);
  }

  submitForm = (event) => {
    event.preventDefault();
    this.sendRegistrationData();
  }

  render() {
    // console.log('state upon rendering: ', this.state);
    return (
      <div>
        <div>Registration Form</div>
        <form>
          <input label="First Name" placeholder="First Name" name="firstname" type="text" required value={this.state.firstname} onChange={this.handleInputChange} />
          <input label="Last Name" placeholder="Last Name" name="lastname" type="text" required value={this.state.lastname} onChange={this.handleInputChange} />
          <br />
          <input label="Email" placeholder="Email" name="email" type="text" required value={this.state.email} onChange={this.handleInputChange} />
          <br />
          <input label="Username" placeholder="Username" name="username" type="text" required value={this.state.username} onChange={this.handleInputChange} />
          <br />
          <input label="Password" placeholder="Password" name="password" type="password" required value={this.state.password} onChange={this.handleInputChange} />
          <input label="Confirm Password" placeholder="Confirm Password" name="passwordConfirm" required type="password" value={this.state.passwordConfirm} onChange={this.handleInputChange} />
          <br />
          <button variant="raised" color="primary" onClick={this.submitForm}>Register</button>
        </form>

        {/* login modal begin */}
        <div
          open={this.state.open}
          onClose={this.errDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div id="alert-dialog-title">Error</div>
          <div>
            <div variant="headline">{this.state.error}</div>
          </div>
          <div>
            <button onClick={this.errDialogClose} color="primary">
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default (RegistrationForm);
