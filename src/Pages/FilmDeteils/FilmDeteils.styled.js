import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardFilm = styled.div`
border-bottom: 2px solid gray;
padding: 20px 0;

`;

export const PosterInfo = styled.div`
display: flex;
align-items: center;

`;

export const Overview = styled.p`
font-size: 20px;
font-weight: 600;
margin-bottom: 10px;
 span{
	margin-top: 10px;
	margin-bottom: 10px;
	display: block;
	font-size: 16px;
	font-weight: 400;
 }
`;

export const ItemsList = styled.ul`
margin-left: 40px;
border: 1px solid orange;
padding: 10px 20px 70px 20px;
border-radius: 8px;


`;

export const PosterImage = styled.div`
flex: 0 0 300px;
overflow: hidden;
border-radius: 8px;
box-shadow: 3px 3px 4px 2px gray;
`;

export const InformLink = styled(Link)`
text-decoration: none;
margin-bottom: 5px;
display: block;
color: black;
font-weight: 600;
text-decoration: underline;
&:hover{
	color: blue;
}
`;

export const AddInfo = styled.h2`
font-size: 23px;
font-weight: 700;
margin-bottom: 20px;

`;
