import { ButtonSearch, Input, Label, SearchForm } from './SearchMovie.styled';
import PropTypes from 'prop-types';
import { Container } from 'components/App.styled';
export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.name.value); 
    e.currentTarget.name.value = '';
  };

  return (
    <>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <Label>
            <Input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="search"
              className="input"
            />
          </Label>
          <ButtonSearch type="submit">Search</ButtonSearch>
        </SearchForm>
      </Container>
    </>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
