import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ontap from './Pages/Ontap';
import Product from './Pages/Product';
import Kategorija from './Pages/Kategorija';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import neban from './Components/Assets/lipskio-aline.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Ontap />} />
            <Route path="/Nealkoholiniai" element={<Kategorija banner={neban} category="Nealkoholiniai" />} />
            <Route path="/Alus" element={<Kategorija category="Alus" />} />
            <Route path="/Sidras" element={<Kategorija category="Sidras" />} />
            <Route path="Product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
