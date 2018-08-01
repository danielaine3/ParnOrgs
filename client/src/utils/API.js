import axios from 'axios';

// const makeCancelable = (promise) => {
//   let hasCanceled_ = false;

  // const wrappedPromise = new Promise((resolve, reject) => {
  //   promise.then(
  //     val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
  //     error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
  //   );
  // });

  // return {
  //   promise: wrappedPromise,
  //   cancel() {
  //     hasCanceled_ = true;
  //   },
  // };
// };

export default {
  //User
  registerUser: data => axios.post('/api/users/register', data),
  loginUser: data => axios.post('/api/users/login', data),
  logoutUser: () => axios.get('/api/users/logout'),
  getCurrentUser: () => axios.get('/api/users/getCurrentUser'),
  updateUser: data => axios.put(`/api/users/${data.id}`, data),


  //Scholar
  addScholar: data => axios.post('/api/scholars/', data),
  getScholars: () => axios.get('/api/scholars/'),
  updateScholar: data => axios.put(`/api/scholars/${data._id}`, data),
  deleteScholar: id => axios.delete(`/api/scholars/${id}`),

  //Dates
  addDates: data=> axios.post('/api/dates/', data),
  getDates: () => axios.get('api/dates'),
  updateDates: data=> axios.put(`/api/dates/${data._id}`, data),
  deleteDates: id=>axios.delete(`/api/dates/${id}`),
};
