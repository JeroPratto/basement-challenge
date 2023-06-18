import { productMock } from '@/__mocks__/product.mock'
import ModalProduct from '@/app/components/Navbar/components/ModalProduct'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('ModalProducts', () => {
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	const mockStore = configureStore()
	const store = mockStore({})
	const modifyProductMock = { ...productMock, quantity: 2 }
	beforeEach(() => {
		render(
			<Provider store={store}>
				<ModalProduct product={modifyProductMock}></ModalProduct>
			</Provider>,
		)
	})
	it('should render correctly data of props', () => {
		// /^hello world$/i => fulls string match ignore case
		// /^$/i
		const title = screen.getByText(productMock.title)
		const description = screen.getByText(productMock.description)
		// use modifyProductMock beacuse change productmock
		const quantityState = screen.getByText(String(modifyProductMock.quantity))
		const value = productMock.value * modifyProductMock.quantity
		const productvalue = screen.getByTestId('product value')

		expect(title).toBeInTheDocument()
		expect(description).toBeInTheDocument()
		expect(quantityState).toBeInTheDocument()
		expect(productvalue.textContent!.slice(1)).toEqual(String(value))
	})
	it('should render image', () => {
		const productImage = screen.getByTestId('product image') as HTMLImageElement
		expect(productImage).toBeInTheDocument()
		expect(productImage.alt).toEqual(productMock.description)
	})
	it('should render buttons and toggleGroup', () => {
		const buttonDecrease = screen.getByTestId('quantity decrease button')
		const buttonIncrease = screen.getByTestId('quantity increases button')
		const toggleGroup = screen.getByTestId('toggle group sizes')
		expect(buttonDecrease).toBeInTheDocument()
		expect(buttonIncrease).toBeInTheDocument()
		expect(toggleGroup).toBeInTheDocument()
	})
	it('should actualice value when click on decrease button', async () => {
		const buttonDecrease = screen.getByTestId('quantity decrease button')
		// is productMock.value because the initial value is 2 and decreases by 1 when clicked button then 1 * productMock.value = productmock.value
		const expectedValue = productMock.value
		await userEvent.click(buttonDecrease)
		const value = screen.getByTestId('product value')
		expect(value.textContent!.slice(1)).toEqual(String(expectedValue))
	})
	it('should actualice value when click on increases button', async () => {
		const buttonIncrease = screen.getByTestId('quantity increases button')
		// is 3 because the initial value is 2 and increase by 1 when clicked button
		const expectedValue = 3 * productMock.value
		await userEvent.click(buttonIncrease)
		const value = screen.getByTestId('product value')
		expect(value.textContent!.slice(1)).toEqual(String(expectedValue))
	})
})
