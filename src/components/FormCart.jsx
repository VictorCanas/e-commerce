import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FormCart = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const { isLogged, cleanCart, cart } = useContext(CartContext);

  const db = getFirestore();

  const buyProd = (e) => {
    e.preventDefault();
    if (isLogged) {
      if (email === emailRepeat) {
        addDoc(orderCollection, order).then(({ id }) => {
          Swal.fire({
            icon: "success",
            title: "Thank you for your purchase!",
            text: `Order id:"${id}"`,
          }).then(function () {
            cleanCart();
          });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Emails don't march",
          timer: 10000,
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please log in to make a purchase",
        timer: 10000,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup");
        }
      });
    }
  };

  const order = {
    name,
    lastName,
    email,
    phone,
    cart,
  };

  const orderCollection = collection(db, "orden");

  return (
    <>
      <div className="form_cart">
        <Form onSubmit={buyProd}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Verify Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmailRepeat(e.target.value)}
                placeholder="Email"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                type="number"
                required
              />
            </Form.Group>
            <Button type="submit">Confirm Purchase</Button>
          </fieldset>
        </Form>
      </div>
    </>
  );
};

export default FormCart;
