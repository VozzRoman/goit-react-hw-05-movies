import { getReviewMovie } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
	const {id} = useParams();
	const [reviews, setReviews] = useState([]);

	useEffect(()=> {
		async function reviewsMovies(){
			const response = await getReviewMovie(id);
			const data = response.data.results;
			setReviews(data);
		} 
		reviewsMovies();
	},[id])
	return(
		<ul>
		{reviews.map(item => {
			return (
				<li key={item.id}>
				<h3>Author: {item.author}</h3>
				<p>{item.content}</p>
			</li>
			)
		})}
		</ul>
	)
}