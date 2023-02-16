import { getSearchMovie } from "apiService/apiService";
import { Container } from "components/App.styled";
import { HomeList } from "components/HomeList/HomeList";
import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { useEffect } from "react";
import { Loader } from "components/Loader/Loader";

import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams();
const [films, setFilms] = useState([]);
const [loader, setLoader] = useState(false);
const location = useLocation();
console.log(location.search);

const search = searchParams.get('query');

useEffect(()=> {
	if(!search){
		return;
	}
	async function searchMovie(){
		setLoader(true);
		try{
			const response = await getSearchMovie(search);
			const data = response.data.results;
			console.log(data);
			if(data.length === 0) {
					return alert('No mathces please enter correct name');
			}
			setFilms(data);
		} catch (error) {
			console.log(error)
		} finally {
			setLoader(false);
		}

		
	}
	searchMovie();
	
},[search])

const handleFromSubmit = (value) => {
	if(value === '') {
		return alert ('the field is empty');
	}
	setSearchParams({query: `${value}`});
	setFilms([]);
	

}


  return (
	<main>
	 <Container>
		<SearchMovie onSubmit={handleFromSubmit}/>
		{loader && <Loader/>}
		<HomeList trandingFilms={films} />
	 </Container>
	</main>

  );
};
