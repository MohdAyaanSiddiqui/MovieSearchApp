import React from "react";
import { Routes , Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetails from "./components/MovieDetails";
function App(){
  return(
    <Routes>
      <Route path="/" element={<SearchPage />}/>
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}
export default App