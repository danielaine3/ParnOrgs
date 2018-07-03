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
}

    export default (Signups);
