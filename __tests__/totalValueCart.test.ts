import productStateMock from '@/__mocks__/productState.mock'
import totalValueCart from '@/app/components/Navbar/components/usecases/totalValueCart'

describe('TotalValueCart', () => {
	it('should return correctly value', () => {
		const totalValue = totalValueCart(productStateMock)
		expect(totalValue).toEqual(55)
	})
})
