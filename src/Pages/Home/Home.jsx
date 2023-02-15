import { Container } from 'components/App.styled';
import { getTrnadingMovie } from 'apiService/apiService';
import { useEffect } from 'react';
import { useState } from 'react';
import { HomeList } from 'components/HomeList/HomeList';

export const Home = ({title}) => {
const [movies, setMovies] = useState([]);
	useEffect(() => {

		try{
			async function trandMovies (){
				const response = await getTrnadingMovie();
				const data = response.data.results;
				setMovies(data);
			}
			trandMovies();
		} catch (error) {
			console.log(error);
		}
	}, []);
	
  return (
    <main>
      <Container>
        <h2>{title}</h2>
		  {movies && <HomeList trandingFilms={movies}/>}
  
      </Container>
    </main>
  );
};
