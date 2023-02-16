import { getReviewMovie } from 'apiService/apiService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Message, ReviewsList } from './Reviews.styled';

const Reviews = () => {
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
          {reviews.map(({id, author, content}) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <Message>We do not have any reviews for this movie</Message>
      )}
    </>
  );
};

export default Reviews;