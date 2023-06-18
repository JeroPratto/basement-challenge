import ItemsShop from '@/app/components/ItemsShop/ItemsShop'
import dataProducts from '@/app/products/products.mock.json'
import { cleanup, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('ItemsShop', () => {
	const mockStore = configureStore()
	const store = mockStore({})
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	it('should render correcly ItemsShop', () => {
		render(
			<Provider store={store}>
				<ItemsShop />
			</Provider>,
		)
		const container = screen.getByTestId('container itemsShop')
		expect(container).toBeInTheDocument()
	})
	it('should render correctly CardItem width data', () => {
		render(
			<Provider store={store}>
				<ItemsShop />
			</Provider>,
		)
		const cardsItem = screen.getAllByTestId('container addProductCart')
		expect(cardsItem).toHaveLength(dataProducts.length)
	})
})
