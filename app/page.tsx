'use client'
import { Provider } from 'react-redux'
import { Hero, Navbar } from './components'
import { Footer } from './components/Footer'
import { ItemsShop } from './components/ItemsShop'
import store from './redux/store'

export default function Home() {
	return (
		<Provider store={store}>
			<div>
				<Navbar />
				<Hero />
				<ItemsShop />
				<Footer />
			</div>
		</Provider>
	)
}
