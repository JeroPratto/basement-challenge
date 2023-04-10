import Product from '@/app/models/Product'
import dataProducts from '@/app/products/products.mock.json'
import React from 'react'
import CardItem from './components/cardItem'
import estilos from './styles/itemsShop.module.css'

export interface ItemsShopProps {}

const ItemsShop: React.FC<ItemsShopProps> = () => {
	return (
		<div className={estilos.container}>
			<div className={estilos.containerCards}>
				{dataProducts.map((product: Product) => (
					<CardItem
						urlImg={product.urlImg}
						title={product.title}
						value={product.value}
						id={product.id}
						key={product.id}
						description={product.description}
						quantity={product.quantity}
					/>
				))}
			</div>
		</div>
	)
}

export default ItemsShop
