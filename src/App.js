
import './App.css';
import Mensaje from './mensaje';

function App() {
  return (
    // Esta es equivalente a <React.Fragments><React.Fragments/> solo que ya esta configurado el balel para que funcione asi+
    <>
      <Mensaje nota='Se lo paso por props' />
      <Mensaje color='orange' nota='nota2' />
      <Mensaje color='red' nota='nota al componente 3' />

    </>
  );
}

export default App;
