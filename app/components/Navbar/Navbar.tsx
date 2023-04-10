'use client'
import { AppStore } from '@/app/redux/store'
import Image from 'next/image'
import logoMarcaDesktop from 'public/logoDesktop.svg'
import logoMarcaMobile from 'public/logoMobile.png'
import logos from 'public/logosNavbar.png'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './components/Modal'
import estilos from './styles/navbar.module.css'
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const state = useSelector((store: AppStore) => store.productCart)
	const [cantproducts, setCantProducts] = useState<number>()
	useEffect(() => {
		setCantProducts(state.length)
	}, [state])
	return (
		<div className={estilos.container}>
			<div className={estilos.containerItems}>
				<div className={estilos.containerTitle}>
					<Image
						src={logoMarcaDesktop}
						alt='Logo marca '
						className={`${estilos.img} ${estilos.logoDesktop}`}
					/>
					<Image
						src={logoMarcaMobile}
						alt='Logo marca '
						className={`${estilos.img} ${estilos.logoMobile}`}
					/>
				</div>
				<div className={estilos.logos}>
					<Image src={logos} alt='Logos ' className={estilos.img} />
				</div>
				<div className={estilos.containerBtnCart}>
					<Modal>
						<button className={estilos.btnCart}>
							CART {`(${cantproducts})`}
						</button>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Navbar
