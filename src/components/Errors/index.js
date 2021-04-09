import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import { Container, LetterContainer, Letter } from './styles'

export default function () {
	const { errors } = useContext(GlobalContext)

	return (
		<Container>
			<h1>Erros</h1>

			<LetterContainer>
				{errors?.map((letter, index) => (
					<Letter className={index === errors.length - 1 ? 'animate__animated animate__wobble' : ''}>
						{letter}
					</Letter>
				))}
			</LetterContainer>
		</Container>
	)
}
