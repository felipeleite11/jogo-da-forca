import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	html {
		background-color: #c5cae9;
	}

	body {
		font-family: 'New Tegomin', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		overflow-x: hidden;
	}

	#root {
		width: 100%;
	}

	h1 {
		margin: 0;
	}
`

export const Container = styled.article`
	display: grid;
	grid-template-columns: 300px auto 250px 250px;
	grid-template-rows: 10% 10% 60% 10%;
	grid-template-areas: 
		'title title title title'
		'gallows tip already_chosen errors'
		'gallows word word word'
		'letter_grid letter_grid letter_grid letter_grid';
	width: 100%;
	height: 99vh;

	> h1 {
		grid-area: title;
		font-size: 40px;
		margin: 10px 30px;
	}

	img {
		grid-area: gallows;
		width: 400px;
		align-self: flex-end;
	}
`
