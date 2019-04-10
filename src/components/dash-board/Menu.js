import React, { Component } from 'react';
import MenuButtons from './MenuButtons';
import FormCustomer from './FormCustomer';
import MenuBreakfast from './MenuBreakfast';

class Menu extends Component {
  render() {
    return (
      <div>
          <FormCustomer></FormCustomer>
          <MenuButtons></MenuButtons>
          <MenuBreakfast></MenuBreakfast>
      </div>
    );
  }
}
export default Menu;
