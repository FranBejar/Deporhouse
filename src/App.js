import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import {NotificationProvider} from './notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  const props= {titulo:"Bienvenidos a DeporHouse", subtitulo:"El mayor eCommerce de deportes del pais"}

  return(
    <div className="App">
      <NotificationProvider>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer props={props} />} />
          <Route path='/category/:categoryID' element={<ItemListContainer props={'Categoria'} />} />
          <Route path='item/:itemID' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
      </NotificationProvider>
    </div>
  )
}

export default App;