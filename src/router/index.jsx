import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePostPage from "../pages/SinglePostPage";
import { Route, Routes } from "react-router-dom";
import StudentPage from "../pages/Student";
import My_first_page from "../pages/My_first_page";
import FirstPage from "../pages/My_first_page";

const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route path="/student" element={<StudentPage />}></Route>
      <Route path="/my_first_page" element={<FirstPage />}></Route>
      <Route path="/" element={<My_first_page />}></Route>
    </Routes>
  );
};

export default RouterApp;
