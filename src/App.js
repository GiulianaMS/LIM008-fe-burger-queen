import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import OrderView from './components/OrderView';
import ErrorPage from './components/ErrorPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/orderview" component={OrderView}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
