import React, { useContext, useState, useEffect } from 'react'

import { GlobalContext } from '../../globalContext'

import { Image } from './styles'

export default function ({ animate = true }) {
	const { image } = useContext(GlobalContext)

	const [animationClass, setAnimationClass] = useState('')

	useEffect(() => {
		if(animate) {
			setAnimationClass('')

			setTimeout(() => {
				setAnimationClass('animate__flash')
			}, 20)
		}
	}, [image])

	return (
		<Image src={image} className={`animate__animated animate__faster ${animationClass}`} />
	)
}
