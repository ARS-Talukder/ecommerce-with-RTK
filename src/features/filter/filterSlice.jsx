import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stock: false,
    brands: [],
    keyword: ""
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggle: (state) => {
            state.stock = !state.stock;
        },

        toggleBrands: (state, action) => {
            const availableBrand = state.brands.find((brand) => brand === action.payload);
            if (!availableBrand) {
                state.brands.push(action.payload);
            } else {
                state.brands = state.brands.filter((brand) => brand !== action.payload)
            }

        }

    },
})

export const { toggle, toggleBrands } = filterSlice.actions;
export default filterSlice.reducer;