import axios from 'axios'

const apiGetProducts = () => {
  const config = {
    method: 'get',
    url: 'https://ecomerce-master.herokuapp.com/api/v1/item',
    headers: {},
    data: {}
  }
  axios(config)
    .then(function (res) {
      // console.log(res.data)
      return (res.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default apiGetProducts
