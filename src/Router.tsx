import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Missing from "./pages/Missing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
