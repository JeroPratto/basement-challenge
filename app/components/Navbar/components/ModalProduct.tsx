import Product from '@/app/models/Product'
import { modifyQuantity, removeProduct } from '@/app/redux/states/product.state'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ToggleGroupSizes from './ToggleGroupSizes'
import estilos from './styles/modalProducts.module.css'

export interface ModalProductProps {
	product: Product
}

const ModalProduct: React.FC<ModalProductProps> = ({ product }) => {
	const [quantityState, setQuantityState] = useState(product.quantity)
	const dispatch = useDispatch()
	const handleClickAddQuantity = () => {
		const id = product.id
		const newQuantity = quantityState + 1
		setQuantityState(newQuantity)
		dispatch(modifyQuantity({ id, quantity: newQuantity }))
	}
	const handleClickLessQuantity = () => {
		const id = product.id
		if (quantityState > 1) {
			const newQuantity = quantityState - 1
			setQuantityState(newQuantity)
			dispatch(modifyQuantity({ id, quantity: newQuantity }))
		} else {
			dispatch(removeProduct({ id }))
		}
	}
	return (
		<div className={estilos.container}>
			<div className={estilos.containerImg}>
				<Image
					src={product.urlImg}
					alt={product.description}
					className={estilos.img}
					width={200}
					height={258}
				/>
			</div>
			<div className={estilos.containerDesc}>
				<div className={estilos.containerTitleAndDesc}>
					<h4 className={estilos.title}>{product.title}</h4>
					<p className={estilos.desc}>{product.description}</p>
				</div>
				<div className={estilos.containerQuantityAndPrice}>
					<div className={estilos.containerQuantity}>
						<p className={estilos.quantity}>QUANTITY: </p>
						<div className={estilos.contador}>
							<button
								className={estilos.btnQuantity}
								onClick={handleClickLessQuantity}
							>
								-
							</button>
							<p>{quantityState}</p>
							<button
								className={estilos.btnQuantity}
								onClick={handleClickAddQuantity}
							>
								+
							</button>
						</div>
					</div>
					<div className={estilos.selectSizeAndPrice}>
						<div className={estilos.selectSize}>
							<p className={estilos.size}>SIZE: </p>
							<ToggleGroupSizes />
						</div>
						<p className={estilos.price}>${product.value * quantityState}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalProduct
