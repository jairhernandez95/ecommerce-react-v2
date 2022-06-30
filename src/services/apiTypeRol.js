import axios from 'axios'

const apiTypeRol = (email, password) => {
  const config = {
    method: 'post',
    url: 'https://ecomerce-master.herokuapp.com/api/v1/login',
    headers: {},
    data: { email, password }
  }
  return axios(config)
    .then(function (res) {
      console.log('Success')
      window.localStorage.setItem('token', res.data.token.toString())
      return res
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
}

export default apiTypeRol
