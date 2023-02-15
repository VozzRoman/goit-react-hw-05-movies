import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from 'components/App.styled';
import { CardFilm, Overview, PosterInfo } from './FilmDeteils.styled';
import { useEffect } from 'react';
import { getDeteilsMovie } from 'apiService/apiService';
import { useState } from 'react';
import { BackLink } from 'components/BackLink/BackLink';


export const FilmDeteils = () => {
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [deteils, setDeteils] = useState({});
  const locaction = useLocation();
  const bakLink = locaction.state?.from ?? '/';
 

  useEffect(() => {
	
    async function deteilsMovies() {
      const response = await getDeteilsMovie(id);
      console.log(response.data);
      setDeteils(response.data);
    }

    deteilsMovies();
  }, [id]);


const genreData = deteils.genres.map(item => item.name);
console.log(genreData);

console.log(deteils.genres)

  return (
    <Container>
				<BackLink to={bakLink}>Go back</BackLink>
        <>
          <CardFilm key={deteils.id}>
            <PosterInfo>
              <img src={pathImage + deteils.poster_path} alt="" width="200" />
              <ul>
                <h2>{deteils.title}</h2>
                <p>User score</p>
                <Overview>
                  Overview <span>{deteils.overview}</span>
                </Overview>
                <Overview>
                  Genre <span></span>
                </Overview>
              </ul>
            </PosterInfo>
          </CardFilm>
          <ul>
            <p>Additioinal information</p>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>

    </Container>
  );
};
