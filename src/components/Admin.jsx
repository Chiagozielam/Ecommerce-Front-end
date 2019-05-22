import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <div className="col- mainDarkBg" style={{height: "90vh", width: "20vw", fontSize: "20px", fontWeight: "bold"}}>
            <div className="pt-5 pl-3">
                <p className="pb-3"><Link to='/menclothingadmin' className="mainGreyColor link">MEN CLOTHING</Link></p>
                <p className="pb-3"><Link to='/menshoesadmin' className="mainGreyColor link">MEN SHOES</Link></p>
                <p className="pb-3"><Link to='/womendressesadmin' className="mainGreyColor link">WOMEN DRESSES</Link></p>
                <p className="pb-3"><Link to='/womenshoesadmin' className="mainGreyColor link">WOMEN SHOES</Link></p>
                <p className="pb-3"><Link to='/accessoriesadmin' className="mainGreyColor link">ACCESSORIES</Link></p>
            </div>
        </div>

      </div>
    )
  }
}
