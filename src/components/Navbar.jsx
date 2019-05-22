import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light-">
          <Link to="/" className="navbar-brand">
            {/* <img src={logo} alt="store" className="navbar-brand" /> */}
            BuyMe
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/men" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/women" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/accessories" className="nav-link">
                Accessories
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <button type="button" className="btn btn-dark">
              <span className="mr-2"><i className="fas fa-cart-plus" /></span>
                Cart
            </button>
          </Link>
        </nav>
      </div>
    )
  }
}
