import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListFilms = styled.ul`
list-style-type: disc;
`;


export const ItemLink = styled.li`
display: block;
&:not(:last-child){
	margin-bottom: 5px;
}

`;

export const Alink = styled(Link)`
cursor: pointer;
color: black;
&:hover{
	color: blue;
}


`;