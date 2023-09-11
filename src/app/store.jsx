import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import { productApi } from '../features/api/apiSlice'

export const store = configureStore({
  // devTools:false,
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
})