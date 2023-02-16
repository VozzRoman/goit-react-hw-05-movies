import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from 'components/App.styled';
import {
  CardFilm,
  ItemsList,
  Overview,
  PosterInfo,
} from './FilmDeteils.styled';
import { Suspense, useEffect } from 'react';
import { getDeteilsMovie } from 'apiService/apiService';
import { useState } from 'react';
import { useRef } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';

const FilmDeteils = () => {
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const noImagePoster = 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
  const { id } = useParams();
  console.log(id);
  const [deteils, setDeteils] = useState(null); //
  const location = useLocation();

  console.log(location);
  const initialPath = useRef(location?.state?.from?.pathname || null);
  console.log(initialPath);

  let backLink = '';
  if (initialPath.current === '/') {
    backLink = '/';
  } else backLink = location.state?.from ?? '/movies';

  useEffect(() => {

    async function deteilsMovies() {
      try {
        const response = await getDeteilsMovie(id);
        console.log(response.data);
        setDeteils(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    deteilsMovies();
  }, [id]);

  return (
	
    <Container>
      <BackLink to={backLink}>Go back</BackLink>
      {deteils && (
        <>
		  
          <CardFilm key={deteils.id}>
			 <Suspense fallback={<Loader/>}>
            <PosterInfo>
              <img src={deteils.poster_path ? pathImage + deteils.poster_path : noImagePoster} alt="" width="200" />
              <ItemsList>
				 
                <h2>{deteils.title}</h2>
                <p>User score: {Math.round(deteils.vote_average * 10)}</p>
                <Overview>
                  Overview <span>{deteils.overview}</span>
                </Overview>
                <Overview>
                  Genre
                  <span>
                    {deteils.genres.map(item => item.name).join(', ')}
                  </span>
                </Overview>
              </ItemsList>
            </PosterInfo>
			</Suspense>
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
			 <Suspense fallback={<Loader/>}>
			 <Outlet />
			 </Suspense>
         
        </>
      )}
    </Container>
  );
};


export default FilmDeteils;