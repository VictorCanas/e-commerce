//Aqui importamos cosas exeternas o npm packages
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  //Abajo de return ponemos todo en formato JSX
  return (
    //Aqui tenemos un fragment con <> y </>
    <>
      <Navbar />
      {/* Fondo oscuro para toda la pagina */}
      <div className="bg-slate-300 w-full h-screen"></div>
    </>
  );
};

export default App;
