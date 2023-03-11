//Aqui importamos cosas exeternas o npm packages
import { BrowserRouter, Routers, Route } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import "./index.css";

const App = () => {
  //Abajo de return ponemos todo en formato JSX
  return (
    <BrowserRouter>
      <NavBar />
      <Routers>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routers>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
