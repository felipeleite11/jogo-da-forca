import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import Button from '../Button'

import { Container } from './styles'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z']

export default function () {
	const { choose } = useContext(GlobalContext)

	return (
		<Container>
			{alphabet.map(letter => (
				<Button text={letter} onClick={() => { 
					choose(letter) 
				}} />
			))}
		</Container>
	)
}
