import axios from 'axios';

export const registerUser = (user) => dispatch => {
  return axios
    .post('/api/users/register', user)
    .then(res => {
      
    })
    .catch(err => {
      alert(err)
    })
}