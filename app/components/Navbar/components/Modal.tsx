import { resetProductCart } from '@/app/redux/states/product.state'
import { AppStore } from '@/app/redux/store'
import arrow from '@/public/arrow.svg'
import checkout from '@/public/checkout.png'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalProduct from './ModalProduct'
import estilos from './styles/modal.module.css'

export interface ModalProps {
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const productState = useSelector((store: AppStore) => store.productCart)
	useEffect(() => {
		let value = 0
		productState.map((element) => {
			value = value + element.quantity * element.value
		})
		setTotal(value)
	}, [productState])
	const [total, setTotal] = useState<number>()
	const dispatch = useDispatch()
	const handleClickCompleteBuy = () => {
		dispatch(resetProductCart())
	}
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={estilos.overlay} />
				<Dialog.Content className={estilos.containerModal}>
					<div className={estilos.modalContent}>
						<div className={estilos.containerClose}>
							<Dialog.Close asChild>
								<div className={estilos.buttonClose}>
									<Image src={arrow} alt='arrow' />
									<p>Close</p>
								</div>
							</Dialog.Close>
						</div>
						<Dialog.Title className={estilos.containerTitle}>
							<span>YOUR</span>
							<span className={estilos.transparent}>CART</span>
						</Dialog.Title>
						<div className={estilos.containerProducts}>
							{productState.map((product) => (
								<ModalProduct key={product.id} product={product} />
							))}
						</div>
						<div className={estilos.footer}>
							<p className={estilos.total}>
								Total: <span>${total}</span>
							</p>
							<Dialog.Close asChild onClick={handleClickCompleteBuy}>
								<div className={estilos.checkout}>
									<Image
										src={checkout}
										alt='checkout'
										className={estilos.checkoutImg}
									/>
								</div>
							</Dialog.Close>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default Modal
