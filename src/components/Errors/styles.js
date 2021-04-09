import styled from 'styled-components'

export const Container = styled.div`
	grid-area: errors;
	display: flex;
	flex-direction: column;
	justify-self: flex-end;
	margin: 50px;
	width: 200px;
	padding-left: 16px;
	height: fit-content;
	border-left: solid 1px grey;

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
	color: red;
`