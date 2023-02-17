import { Container } from 'components/App.styled';
import { lazy, Suspense } from 'react';
import { getTrnadingMovie } from 'apiService/apiService';
import { useEffect } from 'react';
import { useState } from 'react';
// import HomeList from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
const HomeList = lazy(() => import('components/HomeList/HomeList'));

const Home = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function trandMovies() {
      try {
        const response = await getTrnadingMovie();
        const data = response.data.results;
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    trandMovies();
  }, []);

  return (
    <main>
      <Container>
        <h2>{title}</h2>

        <Suspense fallback={<Loader />} />
        {movies && <HomeList trandingFilms={movies} />}
      </Container>
    </main>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
