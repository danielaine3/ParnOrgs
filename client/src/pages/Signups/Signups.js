import React, { Component } from 'react';

class Signups extends Component {
    state = {
      childfirstname: '',
      childlastname: '',
      grade: '',
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
      <div className="formContainer">
        <div id="formTitle">Animus/Accendo Signup</div>
        <form>
          <p>Scholar's Name:</p>
          <input label="First Name" placeholder="First" name="firstname" type="text" required value={this.state.childfirstname} onChange={this.handleInputChange} />
          <input label="Last Name" placeholder="Last" name="lastname" type="text" required value={this.state.childlastname} onChange={this.handleInputChange} />
          <br />
          <p>Scholar's Grade:</p>
          <input label="Grade" placeholder="Grade" name="Grade" type="text" required value={this.state.grade} onChange={this.handleInputChange} />
          <br />
          <p>Username:</p>
          <input label="Username" placeholder="Username" name="username" type="text" required value={this.state.username} onChange={this.handleInputChange} />
          <br />
          <button onClick={this.submitForm}>Signup</button>
        </form>
      </div>

    );
  }
}

export default (Signups);
