import React from 'react'

import { Container } from './styles'

export default function ({ text, onClick }) {
	return (
		<Container onClick={onClick}>
			{text}
		</Container>
	)
}
