import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUser(user);
      const userWatchlist = localStorage.getItem(`watchlist_${user.email}`);
      setWatchlist(userWatchlist ? JSON.parse(userWatchlist) : []);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem(
        `watchlist_${user.email}`,
        JSON.stringify(watchlist)
      );
    }
  }, [user, watchlist]);

  const login = (email) => {
    setUser({ email });
    const userWatchlist = localStorage.getItem(`watchlist_${email}`);
    setWatchlist(userWatchlist ? JSON.parse(userWatchlist) : []);
  };

  const logout = () => {
    setUser(null);
    setWatchlist([]);
    localStorage.removeItem("currentUser");
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.imdbID !== movieId)
    );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        watchlist,
        login,
        logout,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
