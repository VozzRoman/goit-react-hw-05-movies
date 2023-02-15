import axios from "axios";


const API_KEY = "45e036602b450491912e4761702a27c4";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export function getTrnadingMovie() {
	return axios('trending/movie/day', {
		params: {
			api_key: API_KEY,
		}
	})
}

export function getCreditsMovie(id) {
	return axios(`movie/${id}/credits`, {
		params: {
			api_key: API_KEY,
		}
	})
}

export function getReviewMovie(id) {
	return axios(`movie/${id}/reviews`, {
		params: {
			api_key: API_KEY,
		}
	})
}

export function getDeteilsMovie(id) {
	return axios(`movie/${id}`, {
		params: {
			api_key: API_KEY,
		}
	})
}

export function getSearchMovie(searchQuery) {
	return axios(`search/movie?&query=${searchQuery}`, {
		params: {
			api_key: API_KEY,
		}
	})
}
