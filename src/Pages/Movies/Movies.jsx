import { getSearchMovie } from "apiService/apiService";
import { Container } from "components/App.styled";
import { HomeList } from "components/HomeList/HomeList";
import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useEffect } from "react";

import { useState } from "react";

export const Movies = () => {
const [search, setSearch] = useState('');
const [films, setFilms] = useState([]);


useEffect(()=> {
	if(search === ''){
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
	setSearch(value);
	setFilms([]);
	

}






  return (
	<main>
	 <Container>
		<SearchMovie onSubmit={handleFromSubmit}/>
		{/* <HomeList/> */}
	 </Container>
	</main>

  );
};
