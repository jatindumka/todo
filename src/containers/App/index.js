import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ProtectedRoutes from "../../components/ProtectedRoute";
import SignInOut from "../../components/SignInOut";
import TodoList from "../../components/Todo/TodoList";

const App = () => {
  //   const navigate = useNavigate();
  return (
    <BrowserRouter>
      {/* {localStorage.getItem("user") ? <Navbar /> : null} */}
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignInOut />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<TodoList />}></Route>
          {/* <Route path="/about" element={<div>About me</div>}></Route> */}
        </Route>
        <Route index element={<div>please log in</div>}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
