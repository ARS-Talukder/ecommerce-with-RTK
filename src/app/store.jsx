import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'

export const store = configureStore({
  // devTools:false,
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})