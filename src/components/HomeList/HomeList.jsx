import { Container } from 'components/App.styled';

import { useLocation } from 'react-router-dom';
import { Alink, ItemLink } from './HomeList.styled';

export const HomeList = ({ trandingFilms }) => {
	const location = useLocation();
	
 
	console.log(trandingFilms);
  return (
    <Container>
      <ul>
			{trandingFilms.map(item => {
				return(
					<Alink key={item.id} to={`/movies/${item.id}`}  state={{ from: location }}>
					<ItemLink >{item.title}</ItemLink>
					</Alink>
				)
			})}
      </ul>
    </Container>
	
  );
};