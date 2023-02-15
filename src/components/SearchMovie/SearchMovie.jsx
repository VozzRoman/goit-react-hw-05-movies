import { ButtonSearch, Input, SearchForm } from "./SearchMovie.styled";

export const SearchMovie = ({onSubmit}) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(e.currentTarget.name.value);
	
		e.currentTarget.name.value = '';
	}


	
	  return (
		 <>
			<SearchForm onSubmit={handleSubmit}>
			  <label>
				 <Input
					autoComplete="off"
					type="text"
					name="name"
					placeholder="search"
					className="input"
				 />
			  </label>
			  <ButtonSearch type="submit">Отправить</ButtonSearch>
			</SearchForm>
		 </>
	  );
	};