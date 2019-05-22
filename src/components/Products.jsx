import React, { Component } from 'react';
import {EntryCard} from './Card';
import {Link} from 'react-router-dom';

class Products extends Component {
  render() {

    // *****THIS IS THE DEFAULT ROUTE, THIS IS THE FIRST ROUTE YOU SEE ON PAGE LOAD
    return (
      <div>
        <h1 className="text-center section-headers">ALL PRODUCTS</h1>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <Link to='/men' className="link-col"><EntryCard title="Men" icon="fas fa-male" bgCol="mainDarkBg"/></Link>
                <Link to='/women' className="link-col"><EntryCard title="Female" icon="fas fa-female"  bgCol="mainPurpleBg"/></Link>
                <Link to='/accessories' className="link-col"><EntryCard title="Accessories" icon="fas fa-gem"  bgCol="mainGoldBg"/></Link>
            </div>
            <div className="col-"></div>
        </div>

      </div>
    )
  }
}

export default Products;
