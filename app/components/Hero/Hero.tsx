import Image from 'next/image'
import React from 'react'
import { Marquee } from './components/Marquee'
import estilos from './styles/hero.module.css'
import header from 'public/header.svg'
export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	return (
		<>
			<div className={estilos.container}>
				<div className={estilos.containerHeader}>
					<Image src={header} alt='Basement supply' className={estilos.img} />
				</div>
				<Marquee />
			</div>
		</>
	)
}

export default Hero
