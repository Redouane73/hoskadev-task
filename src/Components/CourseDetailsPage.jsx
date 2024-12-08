import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

function CourseDetailsPage() {
  return (
    <div className="details-page">
      <NavBar />
      <div className="main"></div>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default CourseDetailsPage;
