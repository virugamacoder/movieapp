import React from "react";
import MovieSearch from "../Components/MovieSearch";
import { useUserContext } from "../context/UserContext";
import Watchlist from "../Components/Watchlist";

const Home = () => {
  const { logout } = useUserContext();

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Movies Watch List</div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={logout}
            className="px-4 py-2 bg-white text-blue-600 font-bold rounded  transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      <MovieSearch />
      <Watchlist />
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">Movie WatchList App</p>
      </footer>
    </div>
  );
};

export default Home;
