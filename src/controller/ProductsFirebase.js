import  {useEffect, useState} from 'react';
import firebase from '../components/FirebaseConfig';

export const getProductsFirebase = () =>{
    const [getProducts, setProducts] = useState([]);
    const db = firebase.firestore();
    let products = []
    useEffect(()=>{
        db.collection("menu").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                products.push(doc.data())
            });
            setProducts(products);
        })
        
    },[]);  
    return getProducts;
}   
