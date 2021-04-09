import React, { useContext } from 'react'

import { Container } from './styles'

import Letter from '../Letter'

import { GlobalContext } from '../../globalContext'

export default function () {
	const { word, alreadyChosen } = useContext(GlobalContext)

	return (
		<Container>
			{word && word.split('').map(letter => {
				if(alreadyChosen.includes(letter)) {
					return <Letter letter={letter} />
				}

				if(letter === ' ') {
					return <Letter />
				}
				
				return <Letter letter="_" />
			})}
		</Container>
	)
}
