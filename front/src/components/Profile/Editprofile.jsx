import React, { Component } from 'react'

import PhotoService from '../service/photo-service';

import "./editProfile.scss";

export default class Editprofile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
    };
    this.service = new PhotoService();
}

// upload photo?

componentDidMount() {
  if (this.props.imageUrl !== undefined) {
    this.setState({...this.state, imageUrl: this.props.imageUrl})
  }
  }


componentWillReceiveProps(nextProps) {
  this.setState({...this.state, imageUrl: nextProps["imageUrl"]})
  }


handleFileUpload = e => {

const uploadData = new FormData();
uploadData.append("imageUrl", e.target.files[0]);
this.service
  .handleUpload(uploadData)
  .then(response => {
   console.log(1)
    this.setState({ imageUrl: response.imageUrl });
    // this.service
    //   .updatePhotoProfile({ imageUrl: response.imageUrl })
    //   .then(response => {
    //     console.log(2)
    //   });
  })
  .catch(err => {
    console.log("Error while uploading the file: ", err);
  });
};

render() {
  console.log(this.state.imageUrl)
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