import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
height: 60px;
display: flex;
align-items: center;
justify-content: flex-start;
box-shadow: 2px 2px 8px 2px gray;

`;

export const NavList = styled.nav`
display: flex;
align-items: center;
list-style-type: none;
`;

export const NavItem = styled.li`
&:not(:last-child){
	margin-right: 15px;
}
`
export const LinkHref = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }

`