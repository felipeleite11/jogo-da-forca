import React from 'react'

import 'animate.css/animate.css'

import GlobalStyle, { Container } from './styles'

import GlobalProvider from './globalContext'

import Word from './components/Word'
import AlreadyChosen from './components/AlreadyChosen'
import Errors from './components/Errors'
import LetterGrid from './components/LetterGrid'
import GameOver from './components/GameOver'
import Image from './components/Image'
import Tip from './components/Tip'

function App() {
	return (
		<GlobalProvider>
			<GlobalStyle />

			<Container>
				<h1>Jogo da Forca</h1>
				<Image />
				<Tip />
				<AlreadyChosen />
				<Errors />
				<Word />
				<LetterGrid />
				<GameOver />
			</Container>
		</GlobalProvider>
	)
}
	
export default App
