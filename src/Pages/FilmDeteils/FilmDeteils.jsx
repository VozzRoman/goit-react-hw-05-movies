import { Link, Outlet, useParams } from 'react-router-dom';
import { Container } from 'components/App.styled';
import { CardFilm, Overview, PosterInfo } from './FilmDeteils.styled';
import { useEffect } from 'react';
import { getDeteilsMovie } from 'apiService/apiService';
import { useState } from 'react';
import { getGenreMovie } from 'apiService/apiService';

export const FilmDeteils = () => {
  const pathImage = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [deteils, setDeteils] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
	
    async function deteilsMovies() {
      const response = await getDeteilsMovie(id);
      console.log(response.data);
      setDeteils(response.data);
    }
	 async function genreMovies (){
		const response = await getGenreMovie();
		const data = response.data.genres;
		setGenres(data);
	}
	genreMovies();
    deteilsMovies();
  }, [id]);

console.log(genres);
console.log(deteils.id)

// genres.forEach(el => {
// 	console.log(el.id);
//   })

//   const idxGenre = (filmIdGenre, arrayId) => {
// 	let setGenter = [];
// 	filmIdGenre.forEach(el => {
// 	  if (arrayId.includes(el.id)) {
// 		 setGenter.push(el.name);
// 	  }
// 	});
// 	return setGenter.join(', ');
//  }



  return (
    <Container>
      {deteils && (
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
                  Genre <span>{deteils.overview}</span>
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
      )}
    </Container>
  );
};
