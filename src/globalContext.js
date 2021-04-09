import { createContext, useEffect, useState } from 'react'

import img1 from './assets/forca/1.png'
import img2 from './assets/forca/2.png'
import img3 from './assets/forca/3.png'
import img4 from './assets/forca/4.png'
import img5 from './assets/forca/5.png'
import img6 from './assets/forca/6.png'
import img7 from './assets/forca/7.png'

import wordsDatabase from './wordsDatabase'

export const GlobalContext = createContext()

const maxErrors = 6
const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7
]

const GlobalProvider = ({ children }) => {
	const [word, setWord] = useState(null)
	const [tip, setTip] = useState(null)
	const [errors, setErrors] = useState([])
	const [alreadyChosen, setAlreadyChosen] = useState([])
	const [gameOver, setGameOver] = useState(null)
	const [image, setImage] = useState(img1)
	const [wordIndex, setWordIndex] = useState(0)

	function throwWord() {
		if(wordIndex < wordsDatabase.length) {
			setWord(wordsDatabase[wordIndex].word)
			setTip(wordsDatabase[wordIndex].tip)
		} else {
			setWordIndex(0)
		}
	}

	function choose(letter) {
		const updatedChosenLetters = [
			...alreadyChosen,
			letter
		]

		if(!alreadyChosen.includes(letter)) {
			setAlreadyChosen(updatedChosenLetters)
		}

		if(word.search(letter) < 0 && !errors.includes(letter)) {
			setErrors([
				...errors,
				letter
			])

			setImage(images[errors.length + 1])

			if(errors.length + 1 === maxErrors) {
				setGameOver(false)
			}
		}

		if(word.split('').filter(letter => letter !== ' ').every(letter => updatedChosenLetters.includes(letter))) {
			setGameOver(true)
		}
	}

	function next() {
		setGameOver(null)
		setAlreadyChosen([])
		setErrors([])
		setImage(img1)
		setWordIndex(wordIndex + 1)
	}

	useEffect(() => {
		throwWord()
	}, [wordIndex])

	return (
		<GlobalContext.Provider value={{
			word,
			alreadyChosen,
			errors,
			choose,
			gameOver,
			next,
			image,
			tip
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider