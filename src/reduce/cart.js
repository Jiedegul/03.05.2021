


const initialState = {
    itemCart: [],
    totalPrice: 0
}
const cart = (state = initialState, action) => {
    if (action.type === "ADD_TO_CART_PRODUCT") {
        const item = {
            count: 1,
            product: action.product,
            lineTotalPrice: action.product.price
        }

        const itemCart = [...state.itemCart, item]

        return {
            itemCart,
            totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
        }
    }
    return state
}
export default cart;