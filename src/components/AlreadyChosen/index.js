import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import { Container, LetterContainer, Letter } from './styles'

export default function () {
	const { alreadyChosen } = useContext(GlobalContext)

	return (
		<Container>
			<h1>Letras escolhidas</h1>

			<LetterContainer>
				{alreadyChosen?.map((letter, index) => (
					<Letter className={index === alreadyChosen.length - 1 ? 'animate__animated animate__rubberBand' : ''}>
						{letter}
					</Letter>
				))}
			</LetterContainer>
		</Container>
	)
}
