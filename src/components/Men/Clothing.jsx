import React, { Component } from "react";
import axios from "axios";

export default class clothing extends Component {
  state = {
    dbRet: []
  };

  componentDidMount() {
    

    axios
      .get("http://localhost:5000/maleclothing")
      .then(res => {
        console.log(res);
        let dataObj = [];
        let data = res
        data.data.forEach(item => {
          const singleItem = {...item};
          dataObj = [...dataObj, singleItem]
        })
        this.setState(() => {
          return {dbRet: dataObj}
        })
        console.log(this.state.dbRet)
      })
      .catch(err => console.log(`this is the error caught: ${err}`));
  }

  render() {
    return (
      <div>
        <h3 className="text-center section-headers">MEN'S CLOTHING</h3>

        <div className="row margins">
        {
          this.state.dbRet.map( item => {
            return(
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card">
                    <img className= "card-img-top" src={item.productImg} alt=""/>
                    <div className="card-body">
                      <h4 className="card-title">{item.productName}</h4>
                      <p className="card-text">{item.productDescription}</p>
                      <div className="row">
                        <div className="col-7"><button className="btn btn-primary">CART</button></div>
                        <div className="col-5"><h5>₦ {item.productPrice}</h5></div>
                      </div>
                    </div>

                  </div>
                </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}
