import React from 'react';
import ProductDatail from '../components/ProductDatail';
import ProduktList from '../components/ProduktList';
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <div className="container border shadow-sm mt-4">
             <Route path="/"exact>
           <ProduktList/>
           </Route>
           <Route path="/product/:id" exact>
           <ProductDatail/>
           </Route>
            </div>
        </div>
    );
};



export default App;