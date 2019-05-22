import React from "react";
import {Link} from "react-router-dom"

export function EntryCard({ icon, title, bgCol }) {
  return (
    <React.Fragment>
      <div className={bgCol}>
        <div className="card d-flex p-2 text-center mb-3 bg-transparent text-white">
          <div className="card-image">
            <span>
              <i className={icon} style={{ fontSize: "25px" }} />
            </span>
          </div>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export function MainCard({img, title, text, link, linkText}) {
  return(
    <React.Fragment>
      <div class="card" style={{width: "18rem"}}>
          <div className="main-card"><Link to={link}><img class="card-img" src={img} alt=""/></Link></div>
          <div class="card-body"> 
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{text}</p>
            <Link to={link}><a href="#" class="btn btn-primary">{linkText}</a></Link>
          </div>
        </div>     
    </React.Fragment>
  )
}
