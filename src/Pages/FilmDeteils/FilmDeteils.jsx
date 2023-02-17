import { Outlet, useLocation,  useParams } from 'react-router-dom';
import { Container } from 'components/App.styled';
import { IoIosArrowBack } from "react-icons/io";
import {
  CardFilm,
  ItemsList,
  Overview,
  PosterInfo,
  PosterImage,
  InformLink,
  AddInfo,
  ButtonBack,
} from './FilmDeteils.styled';
import { Suspense, useEffect } from 'react';
import { getDeteilsMovie } from 'apiService/apiService';
import { useState } from 'react';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';

const FilmDeteils = () => {
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const noImagePoster =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
  const { id } = useParams();
  const urlData = useParams()
  console.log(urlData);
  console.log(id);
  const [deteils, setDeteils] = useState(null); //
  const location = useLocation();
  const searchPath = useRef(location.state?.from.search);
  console.log(searchPath.current)
  const initialPath = useRef(location.state?.from.pathname);
  console.log(initialPath.current);

  let backLink = '';
  if (initialPath.current === '/') {
    backLink = '/';
  } else backLink = `/movies/${searchPath.current}`;

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
      <ButtonBack to={backLink}><IoIosArrowBack/>Go back</ButtonBack>
      {deteils && (
        <>
          <CardFilm key={deteils.id}>
            <Suspense fallback={<Loader />}>
              <PosterInfo>
                <PosterImage>
                  <img
                    src={
                      deteils.poster_path
                        ? pathImage + deteils.poster_path
                        : noImagePoster
                    }
                    alt="poster"
                  />
                </PosterImage>
                <ItemsList>
                  <h2>{deteils.title}</h2>
                  <Overview>
                    User score: {Math.round(deteils.vote_average * 10)}%
                  </Overview>
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
            <AddInfo>Additioinal information</AddInfo>
            <li>
              <InformLink to="cast">Cast</InformLink>
            </li>
            <li>
              <InformLink to="reviews">Reviews</InformLink>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Container>
  );
};

export default FilmDeteils;
