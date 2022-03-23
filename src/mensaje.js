
function Mensaje(props) {
    const mensaje= 'hola'
  const num1= 6
  const num2= 3
  // Puede evaluar datos primitivos por ejemplo pero NO cualquier variable
  // eg const date= newDate(); NO LA PUEDE EVALUAR

  return (
    <div>
  <h2>{mensaje + 'evaluando en JSX desde mi propio archivo' + (num1+num2)} <br/> {props.nota}</h2>      
    <h3 style={{color:props.color}}>'Coloreado con style'</h3>


    </div>
  )
}

export default Mensaje;
