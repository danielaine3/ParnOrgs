import React, { Component } from 'react';
import "./Signups.css";

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
          <br />
          <input label="First Name" placeholder="First" name="firstname" type="text" required value={this.state.childfirstname} onChange={this.handleInputChange} />
          <input label="Last Name" placeholder="Last" name="lastname" type="text" required value={this.state.childlastname} onChange={this.handleInputChange} />
          <br />
          <p>Scholar's Grade:</p>
          <br />
          <input label="Grade" placeholder="Grade" name="Grade" type="text" required value={this.state.grade} onChange={this.handleInputChange} />
          <br />
          <p>Scholar's Homeroom Teacher:</p>
          <br />
          <input label="teacher" placeholder="Homeroom teacher" name="teacher" type="text" required value={this.state.homeroom} onChange={this.handleInputChange} />
          <br />
          <p>Program:</p>
          <br />
          <p><input label="Animus" name="Animus" type="checkbox" required value={this.state.animus} onChange={this.handleInputChange} /> Animus
          <input label="Accendo" name="Accendo" type="checkbox" required value={this.state.accendo} onChange={this.handleInputChange} /> Accendo</p>
          <br />
          <p>Days:</p>
          <br />
          <p><input label="Monday" name="Monday" type="checkbox" required value={this.state.monday} onChange={this.handleInputChange} /> Monday </p>
          <p><input label="Tuesday" name="Tuesday" type="checkbox" required value={this.state.tuesday} onChange={this.handleInputChange} /> Tuesday </p>
          <p><input label="Wednesday" name="Wednesday" type="checkbox" required value={this.state.wednesday} onChange={this.handleInputChange} /> Wednesday </p>
          <p><input label="Thursday" name="Thursday" type="checkbox" required value={this.state.thursday} onChange={this.handleInputChange} /> Thursday </p>
          <p><input label="Friday" name="Friday" type="checkbox" required value={this.state.friday} onChange={this.handleInputChange}/> Friday </p>
          <p><input label="All Week" name="allWeek" type="checkbox" required value={this.state.allWeek} onChange={this.handleInputChange} /> All Week</p>
          <br />
          <button onClick={this.submitForm}>Signup</button>
        </form>
      </div>

    );
  }
}

export default (Signups);
