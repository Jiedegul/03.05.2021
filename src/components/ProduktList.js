import React from 'react';
import { connectAdvanced } from 'react-redux';
import {connect} from "react-redux";
import ProductItem from "./ProductItem"


const ProduktList = ({products}) => {
    return (
        <div>
            <h1>Salam</h1>
            <div className="row mb-4">
                {products.map((item) => (
                    
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};
const msp = ({products}) =>{
return {products}
}

export default connect(msp)(ProduktList);