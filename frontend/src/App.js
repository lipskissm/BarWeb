import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ontap from './Pages/Ontap';
import Asortimentas from './Pages/Asortimentas';
import Apie from './Pages/Apie';
import Kur from './Pages/Kur'
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Ontap/>}/>
        <Route path='/Asortimentas' element={<Asortimentas/>}/>
        <Route path='/Apie mus' element={<Apie/>}/>
        <Route path='/Kur?' element={<Kur/>}/>
        <Route path='Product' element={<Product/>}>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path='/:productId' element={<Product/>}/>