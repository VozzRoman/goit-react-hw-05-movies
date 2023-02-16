import styled from "styled-components";

export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
max-width: 100%;
justify-content: center;
margin-left: -15px;
margin-bottom: -15px;

`;

export const CastItem = styled.li`
flex: calc(100% / 7 - 15px); 
margin-left: 15px;
margin-bottom: 15px;

img{
	border-radius: 4px;
	overflow: hidden;
	height: 213px;
	margin-bottom: 10px;
	
}
`;


export const ActorName = styled.p`
font-weight: 600;
font-size: 16px;
`;

export const Role = styled.p`
font-size: 12px;
`
