import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer style={{backgroundColor: 'black'}}>
  <div className="container py-5">
    <div className="row">
      <div className="col-12 col-md"> Shorpn Logo <small className="d-block my-3 text-muted">© {new Date().getFullYear()}</small> </div>
      <div className="col-6 col-md">
        <h5><b>Features</b></h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link to="/" className="text-muted" >Men Clothing</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Women Clothing</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Jewelry</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Children & Kids</Link>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5><b>Support</b></h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link to="/" className="text-muted" >Email</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Call Us</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Create Ticket</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Resources</Link>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5><b>Company</b></h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link to="/" className="text-muted" >History</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Team</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Partnership</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Affiliates</Link>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5><b>About</b></h5>
        <ul className="list-unstyled text-small">
          <li>
            <Link to="/" className="text-muted" >Team</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Locations</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Privacy</Link>
          </li>
          <li>
            <Link to="/" className="text-muted" >Terms</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer