import axios from 'axios';
console.log(process.env)
class TravelService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`, // process.env.API_URL
      withCredentials: true
    });
    this.service = service;
  }

  getTravels = () => {
    return this.service.get('/travel')
    .then(response => response.data)
  }

  sendTravels = (travel) => {
    return this.service.post('/travel', travel)
    .then(response => response.data)
  }
  
}

export default TravelService;