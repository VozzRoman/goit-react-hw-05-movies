import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonBack = styled(Link)`
margin-top: 20px;
display: inline-flex;
align-items: center;
text-decoration: none;
border-radius: 4px;
font-weight: 500;
justify-content: center;
color: white;
transition: background-color 250ms linear;
&:hover{
	background-color: blue;
}
padding: 5px 7px;
background-color: orange;
`;