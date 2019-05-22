import React, { Component } from 'react'
import Admin from "../Admin"

export default class AccessoriesAdmin extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <Admin/>
          </div>
          <div className="col-8">
            <h1>ADMIN PAGE FOR ACCESSORIES</h1>
          </div>
        </div>
      </div>
    )
  }
}
