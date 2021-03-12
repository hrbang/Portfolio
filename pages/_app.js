import '../public/styles/styles.scss';
import { CursorPosition } from '../public/hooks/cursorPosition'

function Portfolio({ Component, pageProps }) {
	return (
		<>
			<CursorPosition >
				<Component {...pageProps} />
			</CursorPosition>
		</>
	)
}

export default Portfolio
