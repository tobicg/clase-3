import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer, saludo } from './components/ItemListContainer/ItemListContainer.jsx'

function App() { //componente tipo funcion
  let saludo= 'Hola!'
  
  return (
    <div className="App" style={{backgroundColor: '#303030', width: '100%', height: '100vh'}}>
      <NavBar />
      <ItemListContainer saludo={saludo}/>
    </div>
  );
}

//no usamos mas CLASS, ahora usamos className

export default App;