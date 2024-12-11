import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses } from "../api"; // Import API function
import NavBar from "../Navigation/NavBar";
import "./HomePage.css";

//Assets import
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Graphic from "../Assets/Graphic-designer1 1.png";
import Clock from "../Assets/Clock.png";
import Lessons from "../Assets/Flashcards.png";
import Stars from "../Assets/star group.png";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch courses from API
  useEffect(() => {
    const controller = new AbortController(); // AbortController for cleanup
    const loadCourses = async () => {
      setIsLoading(true); // Show loading state
      try {
        const data = await fetchCourses(); // fetch list of the courses
        setCourses(data);
      } catch (err) {
        setError(err.message); // Capture error
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    loadCourses();

    return () => controller.abort(); // Cleanup fetch on unmount
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation bar */}
      <NavBar />

      {/* Main content */}
      <main className="main">
        {/* Page header */}
        <section className="header">
          <div className="heading">
            {" "}
            <h1>جميع الدورات</h1>
          </div>
          <div className="yellow-line-main"></div>
        </section>

        {/* Show loading spinner */}
        {isLoading && (
          <div className="loader">
            <div className="wrapper">
              <div className="circle"></div>
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>
          </div>
        )}

        {/* Display courses */}
        {!isLoading && courses.length > 0 && (
          <section className="courses-list">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="image-container">
                  <img src={Graphic} alt="Course illustration" />
                </div>
                <div className="details-container">
                  <div>
                    <h2>{course.name}</h2>
                  </div>
                  <div className="flex">
                    <div>
                      <img src={Stars} alt="Rating stars" />
                    </div>
                    <div>
                      <span className="txt-gold">{course.rating}</span>(
                      {course.number_of_ratings} تقييمات)
                    </div>
                  </div>
                  <div className="flex">
                    <div className="centre">
                      <img src={Clock} alt="Duration" />
                      <div> ساعات</div>
                    </div>
                    <div className="centre">
                      <img src={Lessons} />
                      <div>{course.course_lessons}</div>
                      <div>درس</div>
                    </div>
                    <div className="course-level">{course.course_level}</div>
                  </div>
                  <div className="flex space-between">
                    <div>
                      <div className="black-text">
                        {course.course_discounted_price} دج
                      </div>
                      <div>
                        <s>{course.course_original_price} دج</s>
                      </div>
                    </div>
                    <div>
                      <button className="button">
                        <Link
                          style={{ color: "white" }}
                          to="/hoskadev-task/course"
                          className="link"
                        >
                          تفاصيل
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      {/* Footer components */}
      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
