import React, { useEffect, useState } from "react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import CoursePath from "./CoursePath";
import { fetchCourseDetails } from "../api"; // Import API function
import "./CourseDetailsPage.css";

// Asset imports
import Light from "../Assets/light.png";
import HotPrice from "../Assets/Hot Price.png";
import Target from "../Assets/Target.png";
import Study from "../Assets/Study.png";
import Certificate from "../Assets/Certificate.png";
import Language from "../Assets/Google Translate.png";
import Time from "../Assets/Time.png";
import Back from "../Assets/School Backpack.png";
import Check from "../Assets/Instagram Check Mark.png";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // To handle component unmounts
    const loadCourseDetails = async () => {
      try {
        const courseData = await fetchCourseDetails(1, controller.signal); // Fetch course data by ID
        setCourse(courseData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      }
    };

    loadCourseDetails();

    return () => controller.abort(); // Cleanup on component unmount
  }, []);

  // Error handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Loading state
  if (!course) {
    return (
      <div className="spinner center">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
      </div>
    );
  }

  // Destructuring course data
  const { basic_info, details } = course;
  const { specifications, course_outputs } = details;

  return (
    <>
      <NavBar />
      <main className="main">
        <section className="description-section">
          {/* Right section in the(description section) */}
          <section className="desc">
            <div className="details-heading">
              {" "}
              <h1>{basic_info.name}</h1>
            </div>

            <div className="basic-info">
              <p>{basic_info.description}</p>
            </div>
            <div className="info-container">
              <div className="column">
                <div className="inline">
                  <div>
                    <img src={Target} alt="target icon" />
                  </div>
                  <p> الفئة المستهدفة: {specifications.course_level}</p>
                </div>
                <div className="inline">
                  <div>
                    <img src={Study} alt="Book icon" />
                  </div>
                  <p>نوع الدورة: {specifications.course_type}</p>
                </div>
                <div className="inline">
                  <div>
                    <img src={Certificate} alt="Certificate icon" />
                  </div>
                  <p>{specifications.course_certificate}</p>
                </div>
              </div>
              <div className="column">
                <div className="inline">
                  <div>
                    <img src={Language} alt="Language icon" />
                  </div>
                  <p>{specifications.course_language}</p>
                </div>
                <div className="inline">
                  <div>
                    <img src={Time} alt="Duration icon" />
                  </div>
                  <p>{specifications.course_duration}</p>
                </div>
                <div className="inline">
                  <div>
                    <img src={Back} alt="Bag icon" />
                  </div>{" "}
                  <p>بداية الدورة: {specifications.course_begin}</p>
                </div>
              </div>
            </div>
          </section>

          {/* card section in the left of(the description section) */}

          <section className="crd">
            <div className="course-image">
              <img src={Light} alt="Graphic illustration" />
            </div>
            <div className="flex">
              <div className="price">
                <div>{basic_info.course_discounted_price} دج</div>
                <div className="span">
                  <s>{basic_info.course_original_price} دج</s>
                </div>
              </div>
              <div className="flame">
                <img src={HotPrice} alt="Hot Price icon" />
              </div>
              <div className="discount">20% تخفيض</div>
            </div>
            <div className="para">
              <p>صلاحية الوصول: وصول دائم للدورة</p>
            </div>
            <div className="btn-container">
              <button className="sub-btn">سجل الآن</button>
            </div>
          </section>
        </section>

        {/* What you will learn section */}

        <section className="skills">
          <section className="details-heading">
            <h1>ماذا ستتعلم في نهاية هذه الدورة؟</h1>
          </section>
          <section className="grid">
            {Object.values(course_outputs).map((output, index) => (
              <div key={index} className="skills-learned">
                <div className="skill">
                  <div>
                    <img src={Check} alt="Check icon" />
                  </div>
                  <div>
                    <h4>{output.title}</h4>
                  </div>
                </div>
                <div className="skill-description">
                  <p className="paragraph">{output.description}</p>
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* Course path section */}

        <CoursePath />
      </main>

      {/* Footer  */}

      <Footer />
      <CopyRight />
    </>
  );
};

export default CourseDetails;
