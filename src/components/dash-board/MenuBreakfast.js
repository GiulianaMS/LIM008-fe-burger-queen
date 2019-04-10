import React, { Component } from 'react';
import firebase from './firebaseConfig';

class MenuBreakfast extends Component {
  componentWillMount() {
    let db = firebase.firestore();
    console.log(db.collection("menu").get())
  
    db.collection("menu").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.data());
      });
    });
  }
  render() {
    return (
      <div className="container">
      </div>
    );
  }
}
export default MenuBreakfast;
