// El ItemCount va adentro del ItemDetail.jsx

import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id }) => {
  const [quanti, setQuanti] = useState(1);
  const { addItem, cart } = useContext(CartContext);

  const addQty = () => {
    if (quanti < stock) {
      setQuanti(quanti + 1);
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "No more left in stock",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const removeQty = () => {
    if (quanti > 1) {
      setQuanti(quanti - 1);
    } else {
      Swal.disableInput();
    }
  };

  const agregarAlCarrito = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="div-counter">
        <div className="botones-contador">
          <Button className="button-counter" onClick={removeQty}>
            <i className="bi bi-dash-square"></i>
          </Button>
          <span>{quanti}</span>
          <Button className="button-counter" onClick={addQty}>
            <i className="bi bi-plus-square"></i>
          </Button>
        </div>
        <div className="button-purchase">
          <Button
            onClick={() => {
              addItem(quanti, id);
              agregarAlCarrito();
            }}
          >
            Add to Cart: {quanti}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
