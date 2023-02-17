import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0)
  const d = new Date();

  return (

     <div>
        <h1>Click Tracker</h1>
        <h2>Este boton le que hemos hecho click {count} veces y la utlima vez que le hicimos click fue
        Febrero {d.getDate()} a las {d.getHours()}:{d.getMinutes()}</h2>
        <button onClick={() => setCount(count + 1)}>Boton 
        </button>
    </div>
  )
}

export default App