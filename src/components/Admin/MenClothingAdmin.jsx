import React, { Component } from "react";
import Admin from "../Admin";
import Axios from "axios";

export default class MenClothingAdmin extends Component { 

  


  state = {
    productName: "",
    productPrice: "",
    productImg: ""
  }

   

  formSubmit = (e) =>{
    e.preventDefault()
    console.log("clicked!!")

    const stateItems = {
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productImg: this.state.productImg,
    }
    Axios
      .post("http://localhost:5000/maleclothing", stateItems)
      .then(res => {
        console.log("successfully posted to api");
      })
      .catch(err => console.log(`the error is ${err}`));

      this.setState({
        productName: " ",
        productPrice: " ",
        productImg: " "
      })
    
    
    // function 
  }

  imgUpload =  (e) => {
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcft8yhab/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'qa4hsadk'

    var file = e.target.files[0];
    var formData = new FormData()
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    Axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'applicaction/x-www-form-urlencoded'
      },
      data: formData
    })
    .then( (res) => {
      console.log(res);
      this.setState({productImg: res.data.secure_url})
    })
    .catch( (err) => console.log(err)
    );
  }



  

  render() {

    

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <Admin />
          </div>
          <div className="col-8">
            <h1>ADMIN PAGE FOR MEN CLOTHING</h1>
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input
                  value= {this.state.productName}
                  onChange = { e => {
                    this.setState({productName: e.target.value})
                  }}
                  type="text"
                  class="form-control"
                  id="productName"
                  aria-describedby="ProductName"
                  placeholder="Enter Name Of Product"
                />
              </div>
              <div class="form-group">
                <label for="price">Price (₦)</label>
                <input
                 value= {this.state.productPrice}
                 onChange = { e => {
                   this.setState({productPrice: e.target.value})
                 }}
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="₦"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Add Image</label>
                <input
                  onChange = {this.imgUpload}
                    
                  type="file"
                  class="form-control-file"
                  id="imgUpload"                  
                />
              </div>
              <button type="submit" class="btn btn-primary">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
