import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const selectedProduct = state.cart.find((product) => product._id === action.payload._id);

            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 };
                state.cart.push(product);
            } else {
                selectedProduct.quantity += 1;
                state.cart
                    .filter((product) => product._id !== selectedProduct._id)
                    .push(selectedProduct)
            }


        },
        removeFromCart: (state, action) => {
            const removeProduct = state.cart.find((product) => product._id === action.payload._id);
            if (removeProduct.quantity > 1) {
                removeProduct.quantity -= 1;
            } else {
                const availableProducts = state.cart.filter((product) => product._id !== removeProduct._id);
                state.cart = availableProducts;

            }


        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;