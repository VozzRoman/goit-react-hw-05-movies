import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListFilms = styled.ul``;

export const ItemLink = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background-color: black;
    display: block;
    border-radius: 50%;
    margin: 7px;
  }
`;

export const Alink = styled(Link)`
  cursor: pointer;
  color: black;
  &:hover {
    color: blue;
  }
`;
