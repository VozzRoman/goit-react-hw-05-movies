import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
align-items: center;

`;

export const NavList = styled.nav`
display: flex;
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

`;

export const MainHeader = styled.div`
align-items: center;
padding: 30px 0px 30px 0px;
box-shadow: 2px 2px 8px 2px gray;

`