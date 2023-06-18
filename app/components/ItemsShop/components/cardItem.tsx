'use client'
import { addProduct } from '@/app/redux/states/product.state'
import Image from 'next/image'
import addProductHover from 'public/hoverProduct.png'
import { useDispatch } from 'react-redux'
import estilos from './styles/cardItem.module.css'

export interface CardItemProps {
	urlImg: string
	title: string
	value: number
	description: string
	id: string
	quantity: number
}

const CardItem: React.FC<CardItemProps> = ({
	urlImg,
	title,
	value,
	description,
	id,
	quantity,
}) => {
	const dispatch = useDispatch()
	const addProductCart = () => {
		dispatch(addProduct({ urlImg, title, value, description, id, quantity }))
	}
	return (
		<div
			className={estilos.containerCard}
			onClick={addProductCart}
			data-testid='container addProductCart'
		>
			<div className={estilos.containerImg}>
				<Image
					src={urlImg}
					alt={description}
					className={estilos.img}
					width={435}
					height={468}
					sizes='(max-width: 375px) 284px, (max-width: 1440px) 435px'
					data-testid='product image'
				/>
				<div
					className={estilos.containerHoverImg}
					data-testid='container hover image'
				>
					<Image
						src={addProductHover}
						alt={'Add product'}
						className={estilos.img}
						width={245}
						height={128}
						sizes='(max-width: 375px) 150px, (max-width: 1440px) 245px'
						data-testid='hover image'
					/>
				</div>
			</div>
			<div className={estilos.footer}>
				<p className={estilos.name} data-testid='product title'>
					{title}
				</p>
				<p className={estilos.value} data-testid='product value'>
					${value}
				</p>
			</div>
		</div>
	)
}

export default CardItem
