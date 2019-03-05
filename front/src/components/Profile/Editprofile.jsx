import React, { Component } from 'react'

import PhotoService from '../service/photo-service';

import "./editProfile.scss";



export default class Editprofile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "https://image.flaticon.com/icons/svg/150/150808.svg",
    };
    this.service = new PhotoService();
}

componentDidMount() {
  // console.log("dentro")
  // if (this.props.imageUrl !== undefined) {
  //     this.setState({ ...this.state, imageUrl: this.props.imageUrl });
  // }
}

// componentWillReceiveProps(nextProps) {
//   console.log("dentro 2")
// this.setState({ ...this.state, imageUrl: nextProps["imageUrl"] });
// }

handleFileUpload = e => {
  // console.log("dentro 3")
// console.log("The file to be uploaded is: ", e.target.files[0]);

const uploadData = new FormData();
uploadData.append("imageUrl", e.target.files[0]);
console.log("llamada desde el componente")
this.service
  .handleUpload(uploadData)
  .then(response => {
   console.log(response)
    this.setState({ imageUrl: response.imageUrl });
    this.service
      .updatePhotoProfile({ imageUrl: response.imageUrl })
      .then(response => {
       
      });
  })
  .catch(err => {
    console.log("Error while uploading the file: ", err);
  });
};

render() {
return (
  <div>
    <div className="photo">
      <img id="profile-image-style" src={this.state.imageUrl} alt="user profile"/>
      <form>
        <input type="file" onChange={e => this.handleFileUpload(e)} />
      </form>
    </div>
  </div>
);
}
}