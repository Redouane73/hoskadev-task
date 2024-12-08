import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Graphic from "../Assets/Graphic-designer1 1.png";
import Clock from "../Assets/Clock.png";
import Lessons from "../Assets/Flashcards.png";
import Stars from "../Assets/star group.png";
import "./HomePage.css";

const BASE_URL = "https://test-api.mapiner.tech";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // For handling aborts
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/courses`, {
          signal: controller.signal,
        });
        const data = await response.json();
        if (response.ok && data.success) {
          setCourses(data.courses);
        } else {
          throw new Error(data.message || "Failed to fetch courses");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => controller.abort(); // Clean up
  }, []);

  return (
    <div className="landing-page">
      <NavBar />
      <div className="main">
        <div className="header">
          <div className="heading">
            {" "}
            <h1>جميع الدورات</h1>
          </div>
          <div className="yellow-line-main"></div>
        </div>
        <div className="courses-list">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="image-container">
                <img src={Graphic} alt="course image" />
              </div>
              <div className="details-container">
                <div>
                  <h2>{course.name}</h2>
                </div>
                <div className="flex">
                  <div>
                    <img src={Stars} />
                  </div>
                  <div>
                    <span className="txt-gold">{course.rating}</span>(
                    {course.number_of_ratings} تقييمات)
                  </div>
                </div>
                <div className="flex">
                  <div className="centre">
                    <img src={Clock} />
                    <div> ساعات</div>
                  </div>
                  <div className="centre">
                    <img src={Lessons} />
                    <div>درس</div>
                    <div>{course.course_lessons}</div>
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
                        to="/course"
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
        </div>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
