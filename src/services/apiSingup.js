import axios from 'axios'

const apiSignup = (first_name, last_name, birth_date, gender, email, password) => {
  console.log('Name: ' + first_name)
  console.log('Last name: ' + last_name)
  console.log('Birth date: ' + birth_date)
  console.log('Gender: ' + gender)
  console.log('Email: ' + email)
  console.log('Password: ' + password)
  const config = {
    method: 'post',
    url: 'https://ecomerce-master.herokuapp.com/api/v1/signup',
    headers: {},
    data: { first_name, last_name, birth_date, gender, email, password}
  }
  return axios(config)
    .then(function (res) {
      console.log('Success')
      return res
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
}

export default apiSignup
