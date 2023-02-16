import { useState } from "react";
import React from "react";
import ComponenteA from "./components/ComponenteA";

const App = () => {
  //TODO:PROPIDEADES-PROPS-EJEMPLO
  //Aqui creamos una funcion que muestra en la consola
  const comision = () => {
    console.log("Comision 51100");
  };

  //Ejemplo de pasar children a padre - creo una funcion que recibe parametro valor
  const tomarValor = (valor) => {
    //El valor es 456
    console.log("el valor es: " + valor);
  };

  //TODO:USANDO HOOKS
  //Coder es el valor incial
  const [nombre, setNombre] = useState("Coder"); //Dentro de usestate se puede pasar cualquier tipo de datos
  const [cantidad, setCantidad] = useState(0);

  console.log(nombre);
  //numero => variable
  //setNumero => funcion modificadora
  //setNmobre("House");

  const sumando = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <>
      <ComponenteA
        numero={4}
        comision={comision}
        esAlumno={true}
        tomarValor={tomarValor}
      />
      <div>
        <h3>{nombre}</h3>
        <button onClick={() => setNombre("House")}>Cambiar</button>
        <h2>{cantidad}</h2>
        <button onClick={sumando}>Agregan con funcion </button>
        <button onClick={() => setCantidad(cantidad + 1)}>
          Agregando adentro
        </button>
      </div>
    </>
  );
};

export default App;
