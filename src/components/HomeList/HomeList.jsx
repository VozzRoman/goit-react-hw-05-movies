import { Container } from 'components/App.styled';

import { Alink, ItemLink } from './HomeList.styled';

export const HomeList = ({ trandingFilms, prevLocation}) => {
	console.log(prevLocation);
	console.log(trandingFilms);
  return (
    <Container>
      <ul>
			{trandingFilms.map(item => {
				return(
					<Alink key={item.id} to={`movies/${item.id}`} state={{from: prevLocation}}>
					<ItemLink >{item.title}</ItemLink>
					</Alink>
				)
			})}
      </ul>
    </Container>
	
  );
};