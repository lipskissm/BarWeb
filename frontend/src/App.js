import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ontap from './Pages/Ontap';
import Product from './Pages/Product';
import Kategorija from './Pages/Kategorija'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Ontap/>}/>
        <Route path='/Nealkoholiniai' element={<Kategorija category ="nealkoholiniai"/>}/>
        <Route path='/Alus' element={<Kategorija category = "alus"/>}/>
        <Route path='/Sidras' element={<Kategorija category = "sidras"/>}/>
        <Route path='Product' element={<Product/>}>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path='/:productId' element={<Product/>}/>