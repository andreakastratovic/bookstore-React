import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import {Shop} from './pages/Shop';
import Contact from './pages/Contact';
import {Cart} from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/shop" exact Component={Shop}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/cart" exact Component={Cart}/>
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
