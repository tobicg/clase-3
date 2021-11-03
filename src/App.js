import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer, saludo } from './components/ItemListContainer/ItemListContainer.jsx'
import ItemCount from './components/ItemCount/ItemCount';
import Formulario from './components/Formulario/Formulario';

function App() { //componente tipo funcion

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo=''/>
      <Formulario title='Elige una cantidad'/>
    </div>
  );
}

//no usamos mas CLASS, ahora usamos className

export default App;