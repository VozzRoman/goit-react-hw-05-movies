import { Container } from "components/App.styled";

export const Movies = () => {
  return (
	<main>
	 <Container>
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
	 </Container>
	</main>

  );
};
