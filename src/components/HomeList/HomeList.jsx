import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const HomeList = ({ trandingFilms }) => {
	console.log(trandingFilms);
  return (
    <Container>
      <ul>
			{trandingFilms.map(item => {
				return(
					<Link key={item.id} to={`movies/${item.id}`}>
					<li >{item.title}</li>
					</Link>
				)
			})}
      </ul>
    </Container>
	
  );
};