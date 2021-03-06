import React, { Component } from 'react';
import "./Signups.css";
import API from '../../utils/API';

class Signups extends Component {
  state = {
    childfirstname: '',
    childlastname: '',
    grade: '',
    homeroom: '',
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    allweek:false,
    // axiosCancelToken: null,
    error: '',
    open: false,
  }

  // componentDidMount() {
  //   API.getCurrentUser().then(response=> {
  //     let currentUser = response.data.user
  //     this.setState({currentUser: currentUser});
  //   }).catch(err =>{
  //     console.log("Error while getting current user: ", err)
  //   })
  // }

    // open err modal
  errDialogOpen = () => { this.setState({ open: true }); };
  // close err modal
  errDialogClose = () => { this.setState({ open: false }); };

	handleInputChange = (event) => this.setState({
    	[event.target.name]: event.target.value,
 	})
  
    // componentWillUnmount() {
    //   if (this.state.axiosCancelToken) {
    //     this.state.axiosCancelToken.cancel();
    //   }
    // }


  handleInputChangeForAutoCompleteField = name => (value) => {
    // console.log('name, value', name, value);
    const dataToSet = {};
    dataToSet[name] = value;
    // console.log('new state data to set', dataToSet);
    this.setState(dataToSet);
  }
  
    // submitForm = (event) => {
    //   event.preventDefault();
    //   this.handleFormSubmit();
    // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.childfirstname && this.state.childlastname && this.state.grade && this.state.homeroom !== "") {
      console.log('current state', this.state);
      console.log("COMPLETE");
      let data = {
        chilefirstname: this.state.childfirstname,
        childlastname: this.state.childlastname,
        grade: this.state.grade,
        homeroom: this.state.homeroom,
        monday:this.state.monday,
        tuesday:this.state.tuesday,
        wednesday:this.state.wednesday,
        thursday:this.state.thursday,
        friday:this.state.friday,
        allweek:this.state.allweek,
      };
      API.addScholar(data).then((response) => {
        console.log("Response from adding Scholar: ", response);
        this.setState({
          childfirstname: '',
          childlastname: '',
          grade: '',
          homeroom: '',
          monday:false,
          tuesday:false,
          wednesday:false,
          thursday: false,
          friday:false,
          allweek:false,
        })
        .catch((err) => {
            console.log('Error while adding scholar: ', err);
            this.setState({ error: "Error while adding scholar."});
            //launch error dialog
            this.errDialogOpen();
            console.error(this.setSate.error, err);
        })
        API.getScholar().then((response) => {
          this.setState({
            scholarData:response.data
          });
        });  
      });
    } else {
    console.log("Unable to add scholar.")
    this.setState({ error: "Incomplete data entered. Scholar require a first name, last name, grade and homeroom teacher to be added."});
      //launch error dialog
      this.errDialogOpen();
    }
  }

  render() {
    // console.log('state upon rendering: ', this.state);
    return (
      <div className="formContainer">
        <form id="dayReg">
        <div id="formTitle">Animus/Accendo Signup</div>
          {/* <p>Days:</p>
          <br /> 
          <p><input label="Monday" name="Monday" type="checkbox" required value={this.state.monday} onChange={this.handleInputChange} /> Monday </p><br />
          <p><input label="Tuesday" name="Tuesday" type="checkbox" required value={this.state.tuesday} onChange={this.handleInputChange} /> Tuesday </p><br />
          <p><input label="Wednesday" name="Wednesday" type="checkbox" required value={this.state.wednesday} onChange={this.handleInputChange} /> Wednesday </p><br />
          <p><input label="Thursday" name="Thursday" type="checkbox" required value={this.state.thursday} onChange={this.handleInputChange} /> Thursday </p><br />
          <p><input label="Friday" name="Friday" type="checkbox" required value={this.state.friday} onChange={this.handleInputChange}/> Friday </p><br />
          <p><input label="All Week" name="allWeek" type="checkbox" required value={this.state.allWeek} onChange={this.handleInputChange} /> All Week</p><br />
          <br /> */}
          <button onClick={this.handleFormSubmit} 
          {...this.state}
          >Signup</button>
          <br />
          <br />
          <br />
        </form>
      </div>

    );
  }
}

export default (Signups);
