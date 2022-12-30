import { Route, Routes } from "react-router-dom";
import { Container, StyledLink, Header } from "./App.styled";

export const App = () => {
  return (
  <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
            </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route/>
      </Routes>
  </Container>
  );
};
