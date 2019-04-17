import { useEffect, useState } from 'react';
import firebase from '../components/FirebaseConfig';

const getProductsFirebase = () => {
  const [getProducts, setProducts] = useState([]);
  const db = firebase.firestore();
  const products = [];
  useEffect(() => {
    db.collection('menu').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });
      setProducts(products);
    });
  }, []);
  return getProducts;
};
export default getProductsFirebase;
