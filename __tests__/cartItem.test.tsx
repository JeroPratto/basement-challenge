import { productMock } from '@/__mocks__/product.mock'
import { addProduct } from '@/app/redux/states/product.state'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import CardItem from '../app/components/ItemsShop/components/cardItem'

describe('CardItem', () => {
	const mockStore = configureStore()
	const store = mockStore({})
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	beforeEach(() => {
		render(
			<Provider store={store}>
				<CardItem
					description={productMock.description}
					id={productMock.id}
					quantity={productMock.quantity}
					title={productMock.title}
					urlImg={productMock.urlImg}
					value={productMock.value}
					data-testid={productMock.id}
				/>
			</Provider>,
		)
	})
	it('should render correctly images', () => {
		const productImage = screen.getByTestId('product image') as HTMLImageElement
		const hoverImage = screen.getByTestId('hover image')
		expect(productImage).toBeInTheDocument()
		expect(hoverImage).toBeInTheDocument()
		expect(productImage.alt).toEqual(productMock.description)
	})
	it('should render corretly data in the Card', () => {
		const titleProduct = screen.getByTestId('product title')
		const valueProduct = screen.getByTestId('product value')
		expect(titleProduct.textContent).toEqual(productMock.title)
		expect(valueProduct.textContent!.slice(1)).toEqual(
			String(productMock.value),
		)
	})
})

describe('CardItem logic', () => {
	const mockStore = configureStore()
	const store = mockStore({})
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	it('should add product to cart on card click', async () => {
		render(
			<Provider store={store}>
				<CardItem
					description={productMock.description}
					id={productMock.id}
					quantity={productMock.quantity}
					title={productMock.title}
					urlImg={productMock.urlImg}
					value={productMock.value}
				/>
			</Provider>,
		)
		const elementAddProduct = screen.getByTestId('container addProductCart')
		await userEvent.click(elementAddProduct)
		const action = store.getActions()
		expect(action).toEqual([addProduct(productMock)])
	})
})
