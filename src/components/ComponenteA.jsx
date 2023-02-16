//Props son objectos entonces para pasar hay que hacer una destruction
//del objeto y luego pasarlo a la funcion
//tomarValor - nombrarlo aqui
const ComponenteA = ({ numero, comision, esAlumno, tomarValor }) => {
  //Cuando pasa una fuccion devo llamarla
  console.log(esAlumno);
  comision();

  //Aqui le doy el valor
  const numeroRandom = 456;

  //Aqui le paso el valor a la funcion
  tomarValor(numeroRandom);

  return <div>{numero}</div>;
};

export default ComponenteA;
