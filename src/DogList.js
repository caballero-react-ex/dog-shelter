import React, { Component } from 'react';
import './DogList.css';

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-3 text-center"> Dog List</h1>
        <div className="container">
          <div className="row">

            {this.props.dogs.map(dog => (
              <div className="col-lg-4 text-center" key={dog.name}>
                <img src={dog.src}/>
                <h3 className="DogList-name">{dog.name}</h3>
              
              </div>
            ))}
            
          </div>
        </div>
      </div>
    )
  }
}

export default DogList;