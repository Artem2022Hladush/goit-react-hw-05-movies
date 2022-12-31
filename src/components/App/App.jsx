import { Route, Routes } from "react-router-dom";
import { Container, } from "./App.styled";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Layout } from "components/Layout/Layout";

export const App = () => {
  return (
  <Container>
      <Routes>
        <Route path="/" element={Layout}/>
        <Route index element={<Home />}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
  </Container>
  );
};
