import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const props= {titulo:"Bienvenidos a DeporHouse", subtitulo:"El mayor eCommerce de deportes del pais"}
  return(
    <div className = "App">
      <NavBar />
      <ItemListContainer props={props}/>
    </div>
  )
}

export default App;