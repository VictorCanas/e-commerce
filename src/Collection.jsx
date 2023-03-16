import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "computadoras");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  },[] );

// Added a key prop to the mapped items for better performance and to avoid React warnings.

  return (
    <div>
      <h1>Productos</h1>
      {products.map((product, index) => ( 
        <div key={index}> 
          <h4>{product.marca}</h4>
          <p>{product.categoria}</p>
          <p>${product.precio}</p> 
        </div>
      ))}
    </div>
  );
};

export default Collection;
