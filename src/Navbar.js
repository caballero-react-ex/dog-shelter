import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/dogs' className="navbar-brand" href="#">Dog Shelter</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/dogs" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            {this.props.dogs.map(dog => (
              <li className="nav-item" key={dog.name}>
              <NavLink exact to={`/dogs/${dog.name}`} className="nav-link" href="#">{dog.name}</NavLink>
            </li>
            ))}

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
