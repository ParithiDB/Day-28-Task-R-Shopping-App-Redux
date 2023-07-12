import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Header from './Components/Header/Header';

function App() {



  
  return (
    <div className="App">

<Header brandName="Ki-Kart" brandLogo="https://e7.pngegg.com/pngimages/494/693/png-clipart-logo-shopping-list-design-product-shopping-list-purple-angle-thumbnail.png"/>
     
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
