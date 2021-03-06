import React, { Component } from 'react';
import "./ScholarInfo.css";
import ScholarCard from './ScholarCard';
import API from '../../utils/API';

class ScholarInfo extends Component {
  state = {
    childfirstname: '',
    childlastname: '',
    grade: '',
    homeroom: '',
    scholarData: [],
    open: false,
  }

  componentDidMount() {
    API.getCurrentUser().then(response=> {
      let currentUser = response.data.user
      this.setState({currentUser: currentUser});
    }).catch(err =>{
      console.log("Error while getting current user: ", err)
    })

    API.getScholar().then(response=> {
      this.setState({
        scholarData:response.data
      })
    }).catch(err =>{
      console.log("Error while getting scholars: ", err)
    })
  }

    // open err modal
  errDialogOpen = () => { this.setState({ open: true }); };
  // close err modal
  errDialogClose = () => { this.setState({ open: false }); };

	handleInputChange = (event) => this.setState({
    	[event.target.name]: event.target.value,
 	})

  handleInputChangeForAutoCompleteField = name => (value) => {
    // console.log('name, value', name, value);
    const dataToSet = {};
    dataToSet[name] = value;
    // console.log('new state data to set', dataToSet);
    this.setState(dataToSet);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.childfirstname && this.state.childlastname && this.state.grade && this.state.homeroom !== "") {
      console.log('current state', this.state);
      console.log("COMPLETE");
      let data = {
        childfirstname: this.state.childfirstname,
        childlastname: this.state.childlastname,
        grade: this.state.grade,
        homeroom: this.state.homeroom,
      };
      API.addScholar(data).then((response) => {
        console.log("Response from adding Scholar: ", response);
        this.setState({
          childfirstname:'',
          childlastname:'',
          grade:'',
          homeroom:'',
        });
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
    } else {
      console.log("Unable to add scholar.")
      this.setState({ error: "Incomplete data entered. Scholar require a first name, last name, grade and homeroom teacher to be added."});
        //launch error dialog
        this.errDialogOpen();
    }
  }

  deleteScholar = (event) => {
    console.log("Deleting scholar.");
    let deleteButton= document.getElementById("deleteButton");
    let scholarId= deleteButton.accessKey;
    //This will delete form database
    API.deleteScholar(scholarId).then((response) =>{
      console.log("Response from deleting scholar: ", response);
      API.getScholar().then((response) => {
        this.setState({
          scholarData:response.data
        });
      });
    })
  }

  render() {
    // console.log('state upon rendering: ', this.state);
    return (
      <div className="formContainer">
        <form id="scholarRegister">
        <div id="formTitle">Add Scholar</div>
          <p>Scholar's Name:</p>
          <br />
          <input label="childfirstName" placeholder="First" name="childfirstname" type="text" required defaultValue={this.state.childfirstname} onChange={this.handleInputChange} />
          <input label="childlastName" placeholder="Last" name="childlastname" type="text" required defaultValue={this.state.childlastname} onChange={this.handleInputChange} />
          <br />
          <p>Scholar's Grade:</p>
          <br />
          <input label="grade" placeholder="Grade" name="grade" type="text" required defaultValue={this.state.grade} onChange={this.handleInputChange} />
          <br />
          <p>Scholar's Homeroom Teacher:</p>
          <br />
          <input label="homeroom" placeholder="Homeroom teacher" name="homeroom" type="text" required defaultValue={this.state.homeroom} onChange={this.handleInputChange} />
          <br />
          <br />
          <button onClick={this.handleFormSubmit} 
          {...this.state.scholardata}
          >Add Scholar</button>
          <br />
          <br />
          <br />
        </form>
        <div>
          <p id="cardTitle">Scholars</p>
          <ScholarCard 
          scholars={this.state.scholarData}
          deleteScholar={this.deleteScholar}
          />
        </div>
      </div>
    );
  }
}

export default (ScholarInfo);
