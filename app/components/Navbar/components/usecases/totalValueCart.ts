import Product from '@/app/models/Product'

const totalValueCart = (productState: Product[]) => {
	let value = 0
	productState.map((element) => {
		value = value + element.value * element.quantity
	})
	return value
}

export default totalValueCart
