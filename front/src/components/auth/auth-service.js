import axios from 'axios';
console.log(process.env)
class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`, // process.env.API_URL
      withCredentials: true
    });
    this.service = service;
  }

  signup = (email, password, name, lastName) => {
    return this.service.post('/signup', {email, password, name, lastName})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (email, password) => {
    return this.service.post('/login', {email, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

// Esto renderiza los datos del usuario?
  profile = () => {
    return this.service.get('/profile', {})
    .then(response => response.data)
  }

   handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
      .then(res => res.data)
  }

  updatePhotoProfile = photo => {
    return this.loggedin().then(user => {
      user.imageUrl = photo.imageUrl;
      return this.service.post("/update", user)
      .then(res => res.data)
    })
  }

 
  
}

export default AuthService;