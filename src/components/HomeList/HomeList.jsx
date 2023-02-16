import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Alink, ItemLink } from './HomeList.styled';

const HomeList = ({ trandingFilms }) => {
  const location = useLocation();

  console.log(trandingFilms);
  return (
    <Container>
      <Suspense>
        <ul>
          {trandingFilms.map(({ id, title }) => {
            return (
              <Alink key={id} to={`/movies/${id}`} state={{ from: location }}>
                <ItemLink>{title}</ItemLink>
              </Alink>
            );
          })}
        </ul>
      </Suspense>
    </Container>
  );
};

HomeList.propTypes = {
  trandingFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default HomeList;
