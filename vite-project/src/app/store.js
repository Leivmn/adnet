import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/Products/productSlice'
import basketReducer from '../features/Products/basketSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
    },
})