import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "computadoras", "gYQkI2HckQh9eKQrdkQ8");

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        console.log(docs);
        setProduct(docs);
      }
    });
  }, []);

  return (
    <div>
      <h1>Solo un producto</h1>
      {/*check if the length of the object keys in the product state is not 0 before rendering it  */}
      {Object.keys(product).length !== 0 && (
        <div>
          <h4>{product.marca}</h4>
          <h5>categoria: {product.categoria}</h5>
          <p>precio: ${product.precio}</p>
        </div>
      )}
    </div>
  );
};

export default Document;
