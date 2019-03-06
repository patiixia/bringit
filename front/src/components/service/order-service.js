import axios from 'axios';
class OrderService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`, // process.env.API_URL
      withCredentials: true
    });
    this.service = service;
  }

  getOrders = () => {
    return this.service.get('/order')
    .then(response => response.data)
  }

  sendOrders = (order) => {
    return this.service.post('/order', order)
    .then(response => response.data)
    .catch( message => {
      console.log("error en servicio")
      console.log(message)
    } )
  }
  
}

export default OrderService;