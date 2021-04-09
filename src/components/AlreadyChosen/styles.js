import styled from 'styled-components'

export const Container = styled.div`
	grid-area: already_chosen;
	display: flex;
	flex-direction: column;
	justify-self: flex-end;
	margin: 0 50px;
	width: 200px;
	height: fit-content;
	min-height: 80px;

	h1 {
		font-size: 20px;
		flex: 1;
	}
`

export const LetterContainer = styled.div`
	display: flex;
	justify-self: flex-end;
	flex-wrap: wrap;
`

export const Letter = styled.h2`
	margin: 0 8px;
	font-size: 34px;
`