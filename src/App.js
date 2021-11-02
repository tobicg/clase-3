import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer, saludo } from './components/ItemListContainer/ItemListContainer.jsx'

function App() { //componente tipo funcion

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo='Hola!'/>
    </div>
  );
}

//no usamos mas CLASS, ahora usamos className

export default App;