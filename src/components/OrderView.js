import React from 'react';
import Navigation from './Navigation';
import FormCustomer from './menu/FormCustomer'
import { MDBBtn } from "mdbreact";
import {Breakfast, LunchDinner} from './menu/Menu';
import {getProductsFirebase} from '../controller/ProductsFirebase';

 export default function OrderView(){
  return(
    <div>
      <Navigation></Navigation>
        <div className="row">
            <div className="col-sm-6 col-xs-12">
              <FormCustomer></FormCustomer>
              <div className="container">
                <MDBBtn color="pink" >Desayuno</MDBBtn>
                <MDBBtn color="cyan">Almuerzo y cena</MDBBtn>
              </div>
              <div>{Breakfast(getProductsFirebase())}</div>
              <div>{LunchDinner(getProductsFirebase())}</div>
            </div>
            <div className="col-sm-6 col-xs-12">
               
            </div>
          </div>
    </div>
  );
 }

/* eventobtn1
    let foodType = "D"
    let esDesayuno = true
    const resultadoDivDesayuno = Breakfast(getProductsFirebase(), esDesayuno);
    $("cnteedor").html(resultadoDivDesayuno);


eventobtn2
    let esDesayuno = false
    const prueba = Breakfast(getProductsFirebase(), "almu"); */
/* class WaiterWiew extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div  className= "">
          <div className="row">
              <div className="col-sm-6 col-xs-12">
                <FormCustomer></FormCustomer>
                <div className="container">
                  <MDBBtn color="pink" >Desayuno</MDBBtn>
                  <MDBBtn color="cyan">Almuerzo y cena</MDBBtn>
                </div>
                <div id='menu'>{Breakfast(getProductsFirebase())}</div>
              </div>
              <div className="col-sm-6 col-xs-12">
                  <h1>pedidos</h1> 
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WaiterWiew;
 */