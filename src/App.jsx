import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";


const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <Navigation />

      <Routes>
        <Route path="home" element={<Home />}/>
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};
export default App;