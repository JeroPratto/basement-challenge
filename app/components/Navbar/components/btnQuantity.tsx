import { modifyQuantity, removeProduct } from '@/app/redux/states/product.state'
import { useDispatch } from 'react-redux'

export interface BtnQuantityProps {
	children: React.ReactNode
	id: string
	quantityState: number
	stateUpdater: (quantity: number) => void
	className?: string
}

export const BtnLessQuantity: React.FC<BtnQuantityProps> = ({
	children,
	id,
	quantityState,
	stateUpdater,
	className,
}) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		if (quantityState > 1) {
			const newQuantity = quantityState - 1
			stateUpdater(newQuantity)
			dispatch(modifyQuantity({ id, quantity: newQuantity }))
		} else {
			dispatch(removeProduct({ id }))
		}
	}
	return (
		<button
			className={className}
			onClick={handleClick}
			data-testid='
			quantity decrease button'
		>
			{children}
		</button>
	)
}

export const BtnAddQuantity: React.FC<BtnQuantityProps> = ({
	children,
	id,
	quantityState,
	stateUpdater,
	className,
}) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		const newQuantity = quantityState + 1
		stateUpdater(newQuantity)
		dispatch(modifyQuantity({ id, quantity: newQuantity }))
	}
	return (
		<button
			onClick={handleClick}
			className={className}
			data-testid='quantity increases button'
		>
			{children}
		</button>
	)
}
