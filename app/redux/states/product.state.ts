'use client'
import Product from '@/app/models/Product'
import { createSlice } from '@reduxjs/toolkit'

const isClient = typeof window !== 'undefined'

const initialState: Product[] = []

const getProducts = (): Product[] => {
	if (isClient) {
		const products = localStorage.getItem('products')
		if (products) {
			return JSON.parse(products)
		}
	}
	return []
}

export const productSlice = createSlice({
	name: 'products',
	initialState: getProducts(),
	reducers: {
		addProduct: (state, action) => {
			const exist = state.find(
				(element: Product) => element.id === action.payload.id,
			)
			if (!exist) {
				state.push(action.payload)
				localStorage.setItem('products', JSON.stringify(state))
			}
		},
		modifyQuantity: (state, action) => {
			const { id, quantity } = action.payload
			const updateState = state.map((product) => {
				if (product.id === id) {
					return { ...product, quantity }
				} else return product
			})
			localStorage.setItem('products', JSON.stringify(updateState))
			return updateState
		},
		removeProduct: (state, action) => {
			const { id } = action.payload
			const filteredState = state.filter((element) => element.id !== id)
			localStorage.setItem('products', JSON.stringify(filteredState))
			return filteredState
		},
		resetProductCart: () => {
			return initialState
		},
	},
})

export const { addProduct, modifyQuantity, removeProduct, resetProductCart } =
	productSlice.actions
export default productSlice.reducer
