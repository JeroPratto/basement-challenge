import React from 'react'
import estilos from './styles/footer.module.css'
import Image from 'next/image'
import imgFooter from 'public/footer.svg'
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<div className={estilos.container}>
			<Image
				src={imgFooter}
				alt='wear everyday'
				className={estilos.img}
				data-testid={'image footer'}
			/>
		</div>
	)
}

export default Footer
