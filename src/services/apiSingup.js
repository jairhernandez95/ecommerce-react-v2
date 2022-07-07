import axios from 'axios'

const apiSignup = (name, lastName, birthDate, gender, email, password) => {
  const config = {
    method: 'post',
    url: 'https://ecomerce-master.herokuapp.com/api/v1/signup',
    headers: {},
    data: { name, lastName, birthDate, gender, email, password }
  }
  return axios(config)
    .then(function (res) {
      console.log('Success')
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
}

export default apiSignup
