import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <label className="form-check-label">These are other color option.</label>
            <div className="bg-primary rounded mx-2" style = {{height : '25px' , width : '30px' , cursor: 'pointer'}} onClick = {()=>{props.toggleMode("primary")}}>  </div>
            <div className="bg-danger rounded mx-2" style = {{height : '25px' , width : '30px' , cursor: 'pointer'}} onClick = {()=>{props.toggleMode("danger")}}>  </div>
            <div className="bg-success rounded mx-2" style = {{height : '25px' , width : '30px' , cursor: 'pointer'}} onClick = {()=>{props.toggleMode("success")}}>  </div>
            <div className="bg-warning rounded mx-2  me-4" style = {{height : '25px' , width : '30px' , cursor: 'pointer'}} onClick = {()=>{props.toggleMode("warning")}}> </div>  
          </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label my-3" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
            <input className="form-check-input me-4 my-4" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }

Navbar.defaultProps = {
  title: 'set title',
  aboutText: "set aboutText"
}
