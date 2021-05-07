import React from 'react';
import { connectAdvanced } from 'react-redux';
import {connect} from "react-redux";
import ProductItem from "./ProductItem"


const ProduktList = ({state}) => {
    return (
        <div>
            <h1>Salam</h1>
            <div className="row mb-4">
                {state.map((item) => (
                    
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};
const msp = (state) =>{
return {state}
}

export default connect(msp)(ProduktList);