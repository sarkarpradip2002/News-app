import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        
          <ul className="navbar-nav">
             <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/News-app"><strong>India News</strong></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/health">Health</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li><li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        </ul>
        
      </nav>
    )
  }
}

export default Navbar
