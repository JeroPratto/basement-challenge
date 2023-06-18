import productStateMock, {
	productStateMockEmpty,
} from '@/__mocks__/productState.mock'
import Modal from '@/app/components/Navbar/components/Modal'
import { resetProductCart } from '@/app/redux/states/product.state'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Modal', () => {
	afterEach(cleanup)
	afterEach(jest.clearAllMocks)
	it('should open modal when clicked button', async () => {
		const mockStore = configureStore()
		const store = mockStore({ productCart: productStateMockEmpty })
		render(
			<Provider store={store}>
				<Modal>
					<button data-testid='button open modal'></button>
				</Modal>
			</Provider>,
		)
		const button = screen.getByTestId('button open modal')
		await userEvent.click(button)
		const containerModal = screen.getByTestId('container modal')
		expect(containerModal).toBeInTheDocument()
	})
	it('should render correctly modalProducts when state is empty', async () => {
		const mockStore = configureStore()
		const store = mockStore({ productCart: productStateMockEmpty })
		render(
			<Provider store={store}>
				<Modal>
					<button data-testid='button open modal'></button>
				</Modal>
			</Provider>,
		)
		const button = screen.getByTestId('button open modal')
		await userEvent.click(button)
		const modalProduct = screen.queryByTestId('container product modal')
		expect(modalProduct).not.toBeInTheDocument()
	})
	it('should render correctly modalProduct when state have products', async () => {
		const mockStore = configureStore()
		const store = mockStore({ productCart: productStateMock })
		render(
			<Provider store={store}>
				<Modal>
					<button data-testid='button open modal'></button>
				</Modal>
			</Provider>,
		)
		const button = screen.getByTestId('button open modal')
		await userEvent.click(button)
		const modalProducts = screen.getAllByTestId('container product modal')
		expect(modalProducts.length).toEqual(productStateMock.length)
	})
	it('should call resetProducCart when the checkout is clicked', async () => {
		const mockStore = configureStore()
		const store = mockStore({ productCart: productStateMock })
		render(
			<Provider store={store}>
				<Modal>
					<button data-testid='button open modal'></button>
				</Modal>
			</Provider>,
		)
		const button = screen.getByTestId('button open modal')
		await userEvent.click(button)
		const checkout = screen.getByTestId('button checkout')
		await userEvent.click(checkout)
		const actions = store.getActions()
		expect(actions).toEqual([resetProductCart()])
	})
})
