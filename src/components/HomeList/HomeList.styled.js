import { Link } from "react-router-dom";
import styled from "styled-components";


export const ItemLink = styled.li`
display: inline-block;
display: flex;

`;

export const Alink = styled(Link)`
cursor: pointer;
&:not(:last-child){
	display: inline-block;
	display: flex;
	
	margin-bottom: 5px;
	
}

`;