import { Container} from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import {HeaderStyle, NavList, NavItem, LinkHref} from 'components/Header/Header.styled';
import { Suspense } from 'react';

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Container>
          <nav>
            <NavList>
              <NavItem>
                <LinkHref to="/" end>Home</LinkHref>
              </NavItem>
              <NavItem>
                <LinkHref to="/movies">Movies</LinkHref>
              </NavItem>
            </NavList>
          </nav>
        </Container>
      </HeaderStyle>
		<Suspense fallback={<div>Loading...</div>}>
		<Outlet />
		</Suspense>
		
    </>
  );
};

export default Header;