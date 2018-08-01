import React, { Component } from 'react';
import "./Home.css";
import { Redirect } from 'react-router-dom'; 

class Home extends Component {
  state = {
    redirect:false,
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

	// handleInputChange = (event) => this.setState({
    // 	[event.target.name]: event.target.value,
 	// })
  
    // componentWillUnmount() {
    //   if (this.state.axiosCancelToken) {
    //     this.state.axiosCancelToken.cancel();
    //   }
    // }


//   handleInputChangeForAutoCompleteField = name => (value) => {
//     // console.log('name, value', name, value);
//     const dataToSet = {};
//     dataToSet[name] = value;
//     // console.log('new state data to set', dataToSet);
//     this.setState(dataToSet);
//   }
  
    // submitForm = (event) => {
    //   event.preventDefault();
    //   this.handleFormSubmit();
    // }

    setRedirect1 = () => {
        this.setState({
            redirect1:true
        })
    }

    renderRedirect1 = () => {
        if (this.state.redirect1) {
            return <Redirect to="/ScholarInfo" />
        }
    }

    setRedirect2 = () => {
        this.setState({
            redirect2:true
        })
    }

    renderRedirect2 = () => {
        if (this.state.redirect2) {
            return <Redirect to="/Signups" />
        }
    }

  render() {
    // console.log('state upon rendering: ', this.state);
    return (
      <div className="formContainer">
        <div id="formTitle">Animus/Accendo Signup</div>
        <form>
          <p>Add Scholar:</p>
          <br />
          <div>
            {this.renderRedirect1()}
             <button onClick={this.setRedirect1}> Add Scholar </button>
          </div>
          <br />
          <p>Add Dates:</p>
          <br />
          <div>
            {this.renderRedirect2()}
            <button onClick={this.setRedirect2}>Add Dates</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>

    );
  }
}

export default (Home);