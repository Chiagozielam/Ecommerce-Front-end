import React, { Component } from "react";
import { MainCard } from "./Card";
import MenClothes from "../images/men clothing.jpg";
import MenShoes from "../images/men shoe.jpg";
import axios from "axios";

class Men extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h3 className= "text-center section-headers">MEN'S SECTION</h3>
        <div className="row">
          <div className="col-2" />
          <div className="col-5">
            <MainCard
              img={MenClothes}
              title="Clothes"
              link="/men/clothing"
              linkText="See All"
            />
          </div>
          <div className="col-5">
            <MainCard
              img="https://besterline.com/wp-content/uploads/2018/06/Men-shoes-leather-summer-mens-Loafers-sneakers-male-shoes-adult-casual-lows-mens-footwear-Flat-Heel-3.jpg"
              title="Shoes"
              link="/men/shoes"
              linkText="See All"
            />
          </div>
          <div className="col-2" />
        </div>
      </React.Fragment>
    );
  }
}

export default Men;
