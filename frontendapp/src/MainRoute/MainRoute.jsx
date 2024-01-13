import { Routes, Route } from "react-router-dom";

import Authentication from "../Components/Authentication";
import Home from "../Components/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Authentication />} />
    </Routes>
  );
};
