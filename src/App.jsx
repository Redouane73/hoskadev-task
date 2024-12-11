// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import CourseDetailsPage from "./Components/Course/CourseDetailsPage";
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
