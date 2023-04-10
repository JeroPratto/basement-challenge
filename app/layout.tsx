import './styles/global.css'

export const metadata = {
	title: 'Basement Supply',
	description:
		'Basement Supply: ropa de alta calidad que combina estilo y comodidad. Descubre nuestra colección de prendas únicas para expresarte con actitud',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='es'>
			<body>{children}</body>
		</html>
	)
}
