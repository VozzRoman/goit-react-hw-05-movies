export const SearchMovie = ({onSubmit}) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(e.currentTarget.name.value);
	
		e.currentTarget.name.value = '';
	}


	
	  return (
		 <>
			<form onSubmit={handleSubmit}>
			  <label>
				 <input
					autoComplete="off"
					type="text"
					name="name"
					placeholder=""
					className="input"
				 />
			  </label>
			  <button type="submit">Отправить</button>
			</form>
		 </>
	  );
	};