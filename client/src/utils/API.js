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
  registerUser: data => axios.post('/api/users/register', data),
  loginUser: data => axios.post('/api/users/login', data),
  logoutUser: () => axios.get('/api/users/logout'),
  getCurrentUser: () => axios.get('/api/users/getCurrentUser'),
  updateUser: data => axios.put(`/api/users/${data.id}`, data),
};
