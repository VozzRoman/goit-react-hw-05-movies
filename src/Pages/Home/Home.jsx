import { Container } from 'components/App.styled';
import { getTrnadingMovie } from 'apiService/apiService';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import HomeList from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';



const Home = ({title}) => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);


				async function trandMovies (){
						setLoading(true);
					try {
						const response = await getTrnadingMovie();
						const data = response.data.results;
						setMovies(data);
					} catch (error) {
						console.log(error);
					} finally {
						setLoading(false);
					}
				}

			trandMovies();
	}, []);
	
  return (
    <main>
      <Container>
        <h2>{title}</h2>
		  {loading && <Loader/>}
		  <Suspense>
		  {movies && <HomeList trandingFilms={movies}/>}
		  </Suspense>
		  
  
      </Container>
    </main>
  );
};


Home.propTypes = {
	title: PropTypes.string,
}

export default Home;