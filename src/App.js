import React, { useState } from 'react'

import 'animate.css/animate.css'

import GlobalStyle, { Container, StartContainer } from './styles'

import GlobalProvider from './globalContext'

import Word from './components/Word'
import AlreadyChosen from './components/AlreadyChosen'
import Errors from './components/Errors'
import LetterGrid from './components/LetterGrid'
import GameOver from './components/GameOver'
import Image from './components/Image'
import Tip from './components/Tip'
import Button from './components/Button'

function App() {
	const [started, setStarted] = useState(false)

	return (
		<GlobalProvider>
			<GlobalStyle />

			{started ? (
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
			) : (
				<StartContainer>
					<Button onClick={() => { setStarted(true) }} text="COMEÇAR" />
				</StartContainer>
			)}
		</GlobalProvider>
	)
}
	
export default App
