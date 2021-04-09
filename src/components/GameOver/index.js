import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import Button from '../Button'

import { Container } from './styles'

export default function () {
	const { gameOver, next, word } = useContext(GlobalContext)

	if(gameOver === null) {
		return null
	}

	return gameOver ? (
		<Container>
			<h1 className="animate__animated animate__heartBeat animate__fast">ACERTOU!</h1>

			<Button text="Próxima palavra" onClick={next} />
		</Container>
	) : (
		<Container>
			<h1 className="animate__animated animate__heartBeat animate__fast">ERROU!</h1>
			
			<h2>{`A palavra era ${word}.`}</h2>

			<Button text="Próxima palavra" onClick={next} />
		</Container>
	)
}
