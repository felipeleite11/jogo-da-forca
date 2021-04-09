import React, { useContext } from 'react'

import { GlobalContext } from '../../globalContext'

import { Image } from './styles'

export default function () {
	const { image } = useContext(GlobalContext)

	return (
		<Image src={image} />
	)
}
