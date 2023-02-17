import { Container } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import {
  HeaderStyle,
  NavList,
  NavItem,
  LinkHref,
  MainHeader,
} from 'components/Header/Header.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const Header = () => {
  return (
    <>
      <MainHeader>
        <Container>
          <HeaderStyle>
            <NavList>
              <NavItem>
                <LinkHref to="/" end>
                  Home
                </LinkHref>
              </NavItem>
              <NavItem>
                <LinkHref to="/movies">Movies</LinkHref>
              </NavItem>
            </NavList>
          </HeaderStyle>
        </Container>
      </MainHeader>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
