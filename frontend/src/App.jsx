import React, {useState} from 'react'
import NavBar from './Components/NavBar/Navbar';
import { Route,Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import MyOrders from './Pages/MyOrders/MyOrders';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Verify from "./Pages/Verify/Verify";

function App(){
  const [showLogin,setShowLogin]=useState(false)
  return(
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
<div className="App">
    <NavBar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
);
}


export default App;
