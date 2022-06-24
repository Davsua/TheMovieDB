import "./App.css";
import { useState } from "react";
import MovieList from "./components/moviesList";
import SearchBox from "./components/searchBox";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/movieDetails";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [search, setSearch] = useState(false);

  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <SearchBox setSearch={setSearch} />
                  <MovieList search={search} />
                </>
              }
            ></Route>
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
