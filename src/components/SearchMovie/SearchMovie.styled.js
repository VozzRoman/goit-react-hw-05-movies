import styled from "styled-components";

export const SearchForm = styled.form`
margin-top: 30px;

`;
export const Label = styled.label`
position: relative;
`;

export const ButtonSearch = styled.button`
cursor: pointer;
background-color: orange;
color: white;
border: none;
height: 35px;
border-radius: 4px;
margin-left: 10px;
transition: background-color 250ms linear;
&:hover{
	background-color: blue;
}
`;

export const Input = styled.input`
padding-left: 10px;
width: 30%;
height: 30px;
`;


