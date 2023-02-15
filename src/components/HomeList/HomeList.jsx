import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const HomeList = ({ trandingFilms, prevLocation}) => {
	console.log(prevLocation);
	console.log(trandingFilms);
  return (
    <Container>
      <ul>
			{trandingFilms.map(item => {
				return(
					<Link key={item.id} to={`movies/${item.id}`} state={{from: prevLocation}}>
					<li >{item.title}</li>
					</Link>
				)
			})}
      </ul>
    </Container>
	
  );
};