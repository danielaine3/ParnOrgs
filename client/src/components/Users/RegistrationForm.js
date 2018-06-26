import React, { Component } from 'react';
import API from '../../utils/API';
import "./RegistrationForm.css";
// import util from '../../utils/util';

class RegistrationForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    firstname: '',
    lastname: '',
    axiosCancelToken: null,
    error: '',
    open: false,
  }

  // componentDidMount() {
  //   this.loadCountryData();
  // }

  componentWillUnmount() {
    if (this.state.axiosCancelToken) {
      this.state.axiosCancelToken.cancel();
    }
  }

  // open login modal
  errDialogOpen = () => { this.setState({ open: true }); };
  // close login modal
  errDialogClose = () => { this.setState({ open: false }); };

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
      this.state.firstname.length < 1 ||
      this.state.lastname.length < 1
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
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    };

    return API.registerUser(data)
      .then((response) => {
        const newUser = response.data.user;
        // send the new user data up to the App.js component
        console.log('newUser: ', newUser);
        this.setState({
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
          firstname: '',
          lastname: '',
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
          Name:<br />
          <input label="First Name" placeholder="First" name="firstname" type="text" required value={this.state.firstname} onChange={this.handleInputChange} />
          <input label="Last Name" placeholder="Last" name="lastname" type="text" required value={this.state.lastname} onChange={this.handleInputChange} />
          <br />
          Email:<br />
          <input label="Email" placeholder="Email" name="email" type="text" required value={this.state.email} onChange={this.handleInputChange} />
          <br />
          Username:<br />
          <input label="Username" placeholder="Username" name="username" type="text" required value={this.state.username} onChange={this.handleInputChange} />
          <br />
          Password:<br />
          <input label="Password" placeholder="Password" name="password" type="password" required value={this.state.password} onChange={this.handleInputChange} />
          <input label="Confirm Password" placeholder="Confirm Password" name="passwordConfirm" type="password" required value={this.state.passwordConfirm} onChange={this.handleInputChange} />
          <br />
          <button onClick={this.submitForm}>Register</button>
        </form>

        {/* login modal begin */}
        <div className='dialogBox' open={this.state.open} onClose={this.errDialogClose}>
          <div id="alert-dialog-title">Error</div>
            <div>{this.state.error}</div>
            <div>
              <button onClick={this.errDialogClose}>
                OK
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default (RegistrationForm);
