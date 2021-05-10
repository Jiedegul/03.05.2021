import React from 'react';
import {connect} from "react-redux"

const CartPage = ({cart}) => {
    return (
        <table className="table table-bordered">
            <theard>
                <tr>
                   
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                <th scope="col">Total Price</th>
                </tr>
            </theard>
            <tbody>
                {cart.itemCart.map((item,index)=>(
                   <tr>
                       <th scope="row">{index+1}</th>
                       <td>
                           <img className="w-25" src={item.product.image} alt="" />
                       </td>
                    
                       <td>
                           {item.product.title}
                       </td>
                       <td>
                           {item.product.price}
                       </td>
                       <td>
                           {item.count}
                       </td>
                       <td>
                           {item.itemTotalPrice}
                       </td>
                   </tr> 
                ))}
            </tbody>
            
        </table>
    );
};
const msp = ({cart})=>{
    return {cart}
}

export default connect(msp)(CartPage);