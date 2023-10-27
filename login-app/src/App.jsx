import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-1">
      <Outlet />
    </div>
  );
};

export default App;
