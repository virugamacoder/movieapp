import React from "react";
import { useUserContext } from "../context/UserContext";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useUserContext();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Watchlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {watchlist && watchlist.length !== 0 ? (
          watchlist.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              removeFromWatchlist={removeFromWatchlist}
              isWatchlist
            />
          ))
        ) : (
          <p>Your watchlist is empty</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
