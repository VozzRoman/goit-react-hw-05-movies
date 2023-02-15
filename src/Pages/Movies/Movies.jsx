import { getSearchMovie } from "apiService/apiService";
import { Container } from "components/App.styled";
import { HomeList } from "components/HomeList/HomeList";
import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useEffect } from "react";

import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams();
const [films, setFilms] = useState([]);
const location = useLocation();
console.log(location.state);

const search = searchParams.get('query');

useEffect(()=> {
	if(!search){
		return;
	}
	async function searchMovie(){
		const response = await getSearchMovie(search);
		const data = response.data.results;
		console.log(data);
		setFilms(data);
	}
	searchMovie();
	
},[search])

const handleFromSubmit = (value) => {
	setSearchParams({query: `${value}`});
	setFilms([]);
	

}


  return (
	<main>
	 <Container>
		<SearchMovie onSubmit={handleFromSubmit}/>
		<HomeList trandingFilms={films} prevLocation={location}/>
	 </Container>
	</main>

  );
};
