import styled from 'styled-components'

export const Container = styled.button`
	border: 0;
	border-radius: 10px;
	padding: 14px;
	background-color: #fff;
	cursor: pointer;
	transition: 300ms;
	font-weight: bold;
	outline: 0;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		background-color: #999;
	}
`
