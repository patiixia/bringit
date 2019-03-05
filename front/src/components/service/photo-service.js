import axios from 'axios';
console.log(process.env)
class PhotoService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`, // process.env.API_URL
      withCredentials: true
    });
    this.service = service;
  }

   handleUpload (imageUrl) {
    console.log("servicio de subida")
    return this.service.post('/auth/upload', imageUrl)
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

export default PhotoService;