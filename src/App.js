import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() { //componente tipo funcion
  return (
    <div className="App" style={{backgroundColor: '#303030', width: '100%', height: '100vh'}}>
      <NavBar />
    </div>
  );
}

//no usamos mas CLASS, ahora usamos className

export default App;
