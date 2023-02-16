import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
// const Header = lazy(() => import('./Header/Header'))
const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const FilmDeteils = lazy(() => import('../Pages/FilmDeteils/FilmDeteils'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import Home from "Pages/Home/Home";
// import Movies from "Pages/Movies/Movies";
// import { NotFoundPage } from "Pages/NotFound/NotFoundPage";

// import FilmDeteils from "Pages/FilmDeteils/FilmDeteils";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const App = () => {
  return (
    <>
    
	  <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home title="Tranding today"/>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<FilmDeteils />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
	  
 
      
    </>
  );
};

export default App;
