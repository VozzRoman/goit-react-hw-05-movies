import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonBack = styled(Link)`
margin-top: 20px;
display: inline-flex;
align-items: center;
text-decoration: none;
border-radius: 4px;
color: white;
&:hover{
	background-color: blue;
}
padding: 5px 10px;
background-color: orange;


`