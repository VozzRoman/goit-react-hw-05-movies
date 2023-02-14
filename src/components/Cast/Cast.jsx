import { getCreditsMovie } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
export const Cast = () => {
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
			{cast.map(item => {
				return (
					<li key={item.id}>
						<img src={pathImage + item.profile_path} alt="poster" width='100'/>
						<p>{item.name}</p>
						<p>{item.character}</p>
					</li>
				)
			})}
		</ul>
	)
}