import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {

  const props= {titulo:"Bienvenidos a DeporHouse", subtitulo:"El mayor eCommerce de deportes del pais"}

  return(
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer props={props} />} />
          <Route path='/category/:categoryID' element={<ItemListContainer props={'Categoria'} />} />
          <Route path='item/:itemID' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;