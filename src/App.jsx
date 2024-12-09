// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import CourseDetailsPage from "./Components/CourseDetailsPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/hoskadev-task" element={<HomePage />}></Route>
      <Route
        path="/hoskadev-task/course"
        element={<CourseDetailsPage />}
      ></Route>
    </Routes>
  );
}

export default App;
