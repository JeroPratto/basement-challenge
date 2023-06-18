import Product from '@/app/models/Product'

export const productStateMockEmpty: Product[] = []

const productStateMock: Product[] = [
	{
		urlImg: 'https://example.com/image.jpg',
		title: 'Product Title',
		value: 20,
		description: 'Product Description',
		id: '1',
		quantity: 1,
	},
	{
		urlImg: 'https://example.com/image.jpg',
		title: 'Product Title',
		value: 10,
		description: 'Product Description',
		id: '2',
		quantity: 2,
	},
	{
		urlImg: 'https://example.com/image.jpg',
		title: 'Product Title',
		value: 5,
		description: 'Product Description',
		id: '3',
		quantity: 3,
	},
]

export default productStateMock
