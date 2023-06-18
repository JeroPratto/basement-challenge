import * as ToggleGroup from '@radix-ui/react-toggle-group'
import estilos from './styles/ToggleGroupSizes.module.css'

export interface ToggleGroupSizesProps {}

const ToggleGroupSizes: React.FC<ToggleGroupSizesProps> = () => {
	return (
		<ToggleGroup.Root
			className={estilos.toggleGroup}
			type='single'
			defaultValue='medium'
			data-testid='toggle group sizes'
		>
			<ToggleGroup.Item
				className={estilos.toggleGroupItem}
				value='small'
				aria-label='Left aligned'
			>
				S
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={estilos.toggleGroupItem}
				value='medium'
				aria-label='Center aligned'
			>
				M
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={estilos.toggleGroupItem}
				value='large'
				aria-label='Right aligned'
			>
				L
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={estilos.toggleGroupItem}
				value='extraLarge'
				aria-label='Right aligned'
			>
				XL
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	)
}

export default ToggleGroupSizes
