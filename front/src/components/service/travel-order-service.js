import axios from 'axios';
class TravelOrderService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`, // process.env.API_URL
      withCredentials: true
    });
    this.service = service;
  }

  getTravels = () => {
    return this.service.post('/travel')
    .then(response => response.data)
  }

  getOrders = () => {
    return this.service.post('/order')
    .then(response => response.data)
  }

  getAllOrdersfromTravels = (id)  => {
    //console.log(id)
    return this.service.post('/travelorders', {"id":id})
    .then(response => response.data)
  }
  
}

export default TravelOrderService;