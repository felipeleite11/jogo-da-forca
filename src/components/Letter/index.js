import React from 'react'

import { Container } from './styles'

export default function ({ letter = ' ' }) {
	return (
		<Container marginHorizontal={letter === ' ' ? 28 : 2}>
			<h1>{letter}</h1>
		</Container>
	)
}
