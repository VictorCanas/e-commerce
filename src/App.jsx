//Aqui importamos cosas exeternas o npm packages
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

const App = () => {
  //Abajo de return ponemos todo en formato JSX
  return (
    //Aqui tenemos un fragment con <> y </>
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvendios a mi tienda virtual"}/>
    </>
  );
};

export default App;
