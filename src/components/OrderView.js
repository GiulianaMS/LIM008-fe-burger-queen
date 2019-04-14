import React, { Component } from 'react';
import Menu from './menu/Menu';
import Navigation from './Navigation';

class WaiterWiew extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div  className= "">
          <div className="row">
              <div className="col-sm-6 col-xs-12">
                <Menu></Menu>
              </div>
              <div className="col-sm-6 col-xs-12">
                  <h1>1 of 3</h1> 
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WaiterWiew;
