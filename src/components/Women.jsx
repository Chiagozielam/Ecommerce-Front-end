import React, { Component } from "react";
import { MainCard } from "./Card";
import WomenDresses from "../images/women dresses.jpeg";
import WomenShoes from "../images/women shoes.jpg";

class Women extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center section-headers">WOMEN'S SECTION</h3>

        <div className="row">
          <div className="col-2" />
          <div className="col-5">
            <MainCard
              img={WomenDresses}
              title="Dresses"
              link="/women/dresses"
              linkText="See All"
            />
          </div>
          <div className="col-5">
            <MainCard
              img={WomenShoes}
              title="Shoes"
              link="/women/shoes"
              linkText="See All"
            />
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default Women;
