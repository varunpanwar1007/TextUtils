import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
        </li>
      </ul>
      <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input onClick={props.toggleMode} type="checkbox" className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
      </div>
      <div className={`custom-control custom-switch text-${props.mode==='light'?'black':'white'}`}>
        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
        <label className="custom-control-label" htmlFor="customSwitch1">Red Dark Mode</label>
      </div>
    </div>
  </nav></>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'Set Title',
    home:'Set Home',
    about:'Set About'
};
