import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useUserContext } from "../context/UserContext";

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState(null);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useUserContext();
 const [error, setError] = useState(null);
  const apiKey = "23946427"; // Api key i know in env variable to manage 
  
  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
      );
      if (response.data.Response === "True") {
        setMovieData(response.data);
        setError(null);
      } else {
        setMovieData("");
        setError("Movie not found");
      }
    } catch (err) {
      console.error("Error fetching movie data");
      setError("Error fetching movie data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieData();
  };

  const isMovieInWatchlist = (movie) => {
    return watchlist.some((item) => item.imdbID === movie.imdbID);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter movie title"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {movieData && (
        <MovieCard
          movie={movieData}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
          isWatchlist={isMovieInWatchlist(movieData)}
        />
      )}
    </div>
  );
};

export default MovieSearch;
