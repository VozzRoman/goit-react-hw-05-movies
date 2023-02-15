import { Link } from "react-router-dom";
import styled from "styled-components";


export const ItemLink = styled.li`
display: inline-block;
display: flex;

`;

export const Alink = styled(Link)`
cursor: pointer;
&:not(:last-child){
	display: block;
	margin-bottom: 5px;
	text-decoration: none;
}

`