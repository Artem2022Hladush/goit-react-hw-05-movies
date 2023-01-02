import styled from "styled-components";

export const Form = styled.form`
display: flex;
`

export const Input = styled.input`
width: 200px;
height: 30px;
`;

export const SearchButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: transparent;
	cursor: pointer;
	outline: none;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	:hover {
   	opacity: 1;
	}
`