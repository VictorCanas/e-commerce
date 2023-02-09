//Aqui importamos cosas exeternas o npm packages

import PrimerComponente from "./components/PrimerComponente";


//En esta area podemos poner javascript


const App = () => {

  const nombre = "Coderhouse";

  //Abajo de return ponemos todo en formato JSX 
  return (
    //Aqui tenemos un fragment con <> y </>
    <>
      <div>
       <h1>Comision 51100</h1>
       {/* Aqui ponemos nombre dentro de una llave */}
       <article>{nombre}</article> 
       {/* Aqui importamos un componente externo dentro de app.jsx */}
       <PrimerComponente/>
       </div>
    </>
  )
}

//Aqui exportamos el componente
export default App
