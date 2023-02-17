import { getReviewMovie } from 'apiService/apiService';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Message, ReviewsList, Text } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
//   console.log(reviews);

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
			<Suspense fallback={<Loader/>}>
				        <ReviewsList>
          {reviews.map(({id, author, content}) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <Text>{content}</Text>
              </li>
            );
          })}
        </ReviewsList>


			</Suspense>

      ) : (
        <Message>We do not have any reviews for this movie</Message>
      )}
    </>
  );
};

export default Reviews;