import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarAcademy from "./components/NavBarAcademy";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext";
import Welcome from "./components/Welcome";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Logout from "./page/Logout";

const App = () => {
  return (
    <ShoppingCartContext>
      <BrowserRouter>
        <NavBarAcademy />

        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/courses" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/category/subcategory/:subcategory"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ShoppingCartContext>
  );
};

export default App;
