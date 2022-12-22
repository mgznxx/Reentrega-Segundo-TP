import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout/Checkout';

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {
  
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/products/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
      
  );
}

export default App;
