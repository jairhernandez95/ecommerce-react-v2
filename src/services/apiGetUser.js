import axios from 'axios'

const apiGetUser = () => {
  const config = {
    method: 'get',
    url: 'https://ecomerce-master.herokuapp.com/api/v1/user/me',
    headers: {
      Authorization: 'JWT ' + window.localStorage.getItem('token')
    }
  }
  return axios(config)
    .then(function (res) {
      console.log(res)
      return res
    })
    .catch(function (error) {
      return error
    })
}

export default apiGetUser
