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
          <p>Program:</p>
          <input label="Animus" name="Animus" type="checkbox" required value={this.state.animus} onChange={this.handleInputChange} /> <p>Animus</p>
          <input label="Accendo" name="Accendo" type="checkbox" required value={this.state.accendo} onChange={this.handleInputChange} /> <p>Accendo</p>
          <br />
          <p>Days</p>
          <input label="Monday" name="Monday" type="checkbox" required value={this.state.monday} onChange={this.handleInputChange} /> <p>Monday</p>
          <input label="Tuesday" name="Tuesday" type="checkbox" required value={this.state.tuesday} onChange={this.handleInputChange} /><p>Tuesday</p>
          <input label="Wednesday" name="Wednesday" type="checkbox" required value={this.state.wednesday} onChange={this.handleInputChange} /><p>Wednesday</p>
          <input label="Thursday" name="Thursday" type="checkbox" required value={this.state.thursday} onChange={this.handleInputChange} /><p>Thursday</p>
          <input label="Friday" name="Friday" type="checkbox" required value={this.state.friday} onChange={this.handleInputChange}/><p>Friday</p>
          <input label="All Week" name="allWeek" type="checkbox" require value={this.state.allWeek} onChange={this.handleInputChange} /><p>All Week</p>
          <button onClick={this.submitForm}>Signup</button>
        </form>
      </div>

    );
  }
}

export default (Signups);
