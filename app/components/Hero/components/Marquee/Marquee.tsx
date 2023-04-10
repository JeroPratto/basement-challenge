import React from 'react'
import estilos from './styles/marquee.module.css'
import cruzLeft from '@/app/assets/cruz-left.png'
import cruzRight from '@/app/assets/cruz-right.png'
import Image from 'next/image'
export interface MarqueeProps {}

const Marquee: React.FC<MarqueeProps> = () => {
	return (
		<div className={estilos.relative}>
			<span className={estilos.cruzLeft}>
				<Image src={cruzLeft} alt='Cruz' />
			</span>
			<div className={estilos.marquee}>
				<div>
					<p className={estilos.item}>
						- A man can't have enough basement swag -
					</p>
					<p className={estilos.item}>
						- A man can't have enough basement swag -
					</p>
				</div>
			</div>
			<span className={estilos.cruzRight}>
				<Image src={cruzRight} alt='Cruz' />
			</span>
		</div>
	)
}

export default Marquee
