import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import { Container } from './styles'

export default function () {
	const { tip } = useContext(GlobalContext)
	
	return (
		<Container>
			{tip}
		</Container>
	)
}
