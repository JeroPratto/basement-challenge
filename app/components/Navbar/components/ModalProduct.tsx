import Product from '@/app/models/Product'
import Image from 'next/image'
import { useState } from 'react'
import ToggleGroupSizes from './ToggleGroupSizes'
import { BtnAddQuantity, BtnLessQuantity } from './btnQuantity'
import estilos from './styles/modalProducts.module.css'

export interface ModalProductProps {
	product: Product
}

const ModalProduct: React.FC<ModalProductProps> = ({ product }) => {
	const [quantityState, setQuantityState] = useState(product.quantity)
	return (
		<div className={estilos.container} data-testid='container product modal'>
			<div className={estilos.containerImg}>
				<Image
					src={product.urlImg}
					alt={product.description}
					className={estilos.img}
					width={200}
					height={258}
					data-testid='product image'
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
							<BtnLessQuantity
								id={product.id}
								quantityState={quantityState}
								stateUpdater={setQuantityState}
								className={estilos.btnQuantity}
							>
								-
							</BtnLessQuantity>
							<p>{quantityState}</p>
							<BtnAddQuantity
								className={estilos.btnQuantity}
								id={product.id}
								quantityState={quantityState}
								stateUpdater={setQuantityState}
							>
								+
							</BtnAddQuantity>
						</div>
					</div>
					<div className={estilos.selectSizeAndPrice}>
						<div className={estilos.selectSize}>
							<p className={estilos.size}>SIZE: </p>
							<ToggleGroupSizes />
						</div>
						<p className={estilos.price} data-testid='product value'>
							${product.value * quantityState}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalProduct
