import { getCreditsMovie } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
export const Cast = () => {
	const noImagePoster = 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
	const pathImage = 'https://image.tmdb.org/t/p/w500';
	const {id} = useParams();
	const [cast, setCast] = useState([]);

	useEffect(()=> {
		async function creditsMovies () {
			const response = await getCreditsMovie(id)
			const data = response.data.cast;
			setCast(data)
		}
		creditsMovies();
	},[id]);

	console.log(cast);
	return(
		<ul>
			{cast.map(({id, profile_path, name, character})=> {
				return (
					<li key={id}>
						<img src={profile_path ? pathImage + profile_path : noImagePoster} alt="poster" width='100'/>
						<p>{name}</p>
						<p>{character}</p>
					</li>
				)
			})}
		</ul>
	)
}