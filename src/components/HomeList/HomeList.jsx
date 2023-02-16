import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Alink, ItemLink } from './HomeList.styled';

export const HomeList = ({ trandingFilms }) => {
	const location = useLocation();
	
 
	console.log(trandingFilms);
  return (
    <Container>
      <ul>
			{trandingFilms.map(({id, title}) => {
				return(
					<Alink key={id} to={`/movies/${id}`}  state={{ from: location }}>
					<ItemLink >{title}</ItemLink>
					</Alink>
				)
			})}
      </ul>
    </Container>
	
  );
};

HomeList.propTypes = {
	trandingFilms: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		}
		
		)
	)
}