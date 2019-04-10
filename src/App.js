import React, { Component } from 'react';
import Navigation from './components/Navigation';
import DashBoard from './components/DashBoard';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation></Navigation>
          <DashBoard></DashBoard>
        </div>
    );
  }
}
export default App;
