import React from 'react';
import ProductDatail from '../components/ProductDatail';
import ProduktList from '../components/ProduktList';
import {Route} from "react-router-dom";
import Navbar from '../components/Navbar'
import CartPage from '../components/CartPage';
const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="container border shadow-sm mt-4">
             <Route path="/"exact>
           <ProduktList/>
           </Route>
           <Route path="/product/:id" exact>
           <ProductDatail/>
           </Route>
           <Route path="/cart" exact>
               <CartPage/>
           </Route>
            </div>
        </div>
    );
};



export default App;