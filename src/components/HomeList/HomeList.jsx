import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Alink, ItemLink, ListFilms } from './HomeList.styled';

const HomeList = ({ trandingFilms }) => {
  const location = useLocation();

  console.log(trandingFilms);
  return (
    <Container>
      <Suspense>
        <ListFilms>
          {trandingFilms.map(({ id, title }) => {
            return (
					<ItemLink key={id}>
              <Alink  to={`/movies/${id}`} state={{ from: location }}>{title} </Alink>
				  </ItemLink>
            );
          })}
        </ListFilms>
      </Suspense>
    </Container>
  );
};

HomeList.propTypes = {
  trandingFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HomeList;
