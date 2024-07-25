import React from "react";
import { UserProvider, useUserContext } from "./context/UserContext";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const AppContent = () => {
  const { user, logout } = useUserContext();

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <Home />
    </div>
  );
};

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App;
