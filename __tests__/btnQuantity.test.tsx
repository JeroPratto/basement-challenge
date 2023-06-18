import { productMock } from '@/__mocks__/product.mock'
import { BtnAddQuantity } from '@/app/components/Navbar/components/btnQuantity'
import { BtnLessQuantity } from '@/app/components/Navbar/components/btnQuantity'
import { modifyQuantity, removeProduct } from '@/app/redux/states/product.state'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('BtnLessQuantity', () => {
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	it('should call removeProduct', async () => {
		const stateUpdaterMock = jest.fn()
		const mockStore = configureStore()
		const store = mockStore({})
		render(
			<Provider store={store}>
				<BtnLessQuantity
					id={productMock.id}
					quantityState={productMock.quantity}
					stateUpdater={stateUpdaterMock}
				>
					-
				</BtnLessQuantity>
				,
			</Provider>,
		)
		const button = screen.getByTestId('quantity decrease button')
		await userEvent.click(button)
		const actions = store.getActions()
		expect(actions).toEqual([removeProduct({ id: productMock.id })])
	})
	it('should call modifyQuantity', async () => {
		const stateUpdaterMock = jest.fn()
		const mockStore = configureStore()
		const store = mockStore({})
		const quantityMock = productMock.quantity + 1
		render(
			<Provider store={store}>
				<BtnLessQuantity
					id={productMock.id}
					quantityState={quantityMock}
					stateUpdater={stateUpdaterMock}
				>
					-
				</BtnLessQuantity>
				,
			</Provider>,
		)
		const button = screen.getByTestId('quantity decrease button')
		await userEvent.click(button)
		const actions = store.getActions()
		const expectQuantityMock = 1
		expect(actions).toEqual([
			modifyQuantity({ id: productMock.id, quantity: expectQuantityMock }),
		])
	})
})

describe('BtnAddQuantity', () => {
	it('should call modifyQuantity', async () => {
		const stateUpdaterMock = jest.fn()
		const mockStore = configureStore()
		const store = mockStore({})
		render(
			<Provider store={store}>
				<BtnAddQuantity
					id={productMock.id}
					quantityState={productMock.quantity}
					stateUpdater={stateUpdaterMock}
				>
					+
				</BtnAddQuantity>
				,
			</Provider>,
		)
		const button = screen.getByTestId('quantity increases button')
		await userEvent.click(button)
		const expectedQuantity = productMock.quantity + 1
		const actions = store.getActions()
		expect(actions).toEqual([
			modifyQuantity({ id: productMock.id, quantity: expectedQuantity }),
		])
	})
})
