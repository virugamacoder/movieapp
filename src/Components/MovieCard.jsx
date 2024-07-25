import React from "react";

const MovieCard = ({
  movie,
  addToWatchlist,
  removeFromWatchlist,
  isWatchlist,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <img
        className="w-full h-80"
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.Title}</div>
        <p className="text-gray-700 text-base">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Plot:</strong> {movie.Plot}
        </p>
        {isWatchlist ? (
          <button
            onClick={() => removeFromWatchlist(movie.imdbID)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Remove from Watchlist
          </button>
        ) : (
          <button
            onClick={() => addToWatchlist(movie)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
