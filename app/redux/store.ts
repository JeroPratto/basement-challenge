import { configureStore } from '@reduxjs/toolkit'
import Product from '../models/Product'
import { productSlice } from './states/product.state'

export interface AppStore {
	productCart: Product[]
}

export default configureStore<AppStore>({
	reducer: {
		productCart: productSlice.reducer,
	},
})
