import { getReviewMovie } from 'apiService/apiService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    async function reviewsMovies() {
      const response = await getReviewMovie(id);
      const data = response.data.results;
      setReviews(data);
    }
    reviewsMovies();
  }, [id]);
  return (
    <>
      {reviews.length ? (
        <ReviewsList>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        'We do not have any reviews for this movie'
      )}
    </>
  );
};
