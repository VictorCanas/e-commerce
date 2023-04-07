import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  function currencyFormat(num) {
    return "$" + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "academy", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      const doc = snapshot.data();
      setProduct(doc);
    });
  }, []);

  const dataFilter = data.filter((item) => item.id == id);

  return (
    <>
      {dataFilter.map((item) => (
        <div key={item.id}>
          <Card className="itemContainer">
            <Card.Img className="itemImage" variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="itemTitulo">{item.name}</Card.Title>
              <Card.Text className="itemCategory">
                Category: {item.category}
              </Card.Text>
              <Card.Text className="itemPrice">
                {currencyFormat(item.price)}
              </Card.Text>
              <Card.Footer className="itemFooter">
                <ItemCount
                  stock={item.stock}
                  id={item.id}
                  addItem={item.addItem}
                  price={item.price}
                  name={item.name}
                />
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
