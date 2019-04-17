import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderView from './components/OrderView';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/orderview" component={OrderView} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
