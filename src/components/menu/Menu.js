import React from 'react';
import { MDBBtn } from "mdbreact";

export const Breakfast = (arr) =>{
  console.log(arr)
  const products = arr.map((product)=>{
    if(product.categoria === 'Desayuno'){
      return(
        <MDBBtn outline color="warning">{product.nombre}</MDBBtn>
      )
    }
  });
  return (
      <div>
        <ul>
          {products}
        </ul>
      </div>
  )};

  export const LunchDinner = (arr) =>{
    console.log(arr)
    const products = arr.map((product)=>{
      if(product.categoria === 'Resto del dia'){
        return(
          <MDBBtn outline color="warning">{product.nombre}</MDBBtn>
        )
      }
    });
    return (
        <div>
          <ul>
            {products}
          </ul>
        </div>
    )};


