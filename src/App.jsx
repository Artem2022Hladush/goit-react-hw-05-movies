import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Layout } from "components/Layout/Layout";
import { MovieDatail } from "pages/MovieDatail";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDatail/>}/>
        </Route>
      </Routes>
  );
};
