import React from "react";
import { useState } from "react";
import "./CoursePath.css";

//Assets imports
import Down from "../Assets/Down.png";

function CoursePath() {
  const [open, setOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <section className="path">
        <section className="details-heading">
          <h1>مسارات الدورة</h1>
        </section>
        <section className="lessons dropdown">
          <div className="course-intro">
            <div>
              <img
                className={`pointer first-pointer ${open ? "active" : ""}`}
                onClick={handleOpen}
                src={Down}
              />
            </div>
            <div className="pointer">مقدمة في عالم التصميم الجرافيكي</div>
          </div>
          <div className="lesson-info">
            <div className="lessons-numb ">6 درس</div>
            <div className="lessons-dur ">7 ساعات ونصف</div>
          </div>
        </section>

        {open ? (
          <section className="lessons dropdown">
            <div className="show-content">
              <div>
                <img
                  className={` pointer sec-pointer ${isOpened ? "active" : ""}`}
                  onClick={handleIsOpened}
                  src={Down}
                />
              </div>
              <div className="course-def">ما هو التصميم الجرافيكي؟</div>
            </div>
            <div className="lesson-info">
              <div className="lessons-numb">3 درس</div>
              <div className="lessons-dur">4 ساعات ونصف</div>
            </div>
          </section>
        ) : null}
        {isOpened && open ? (
          <section className="content-opened dropdown">
            <div className="lesson ">
              <div className="content">
                1.تعريف التصميم الجرافيكي وأهميته في حياتنا اليومية
              </div>
              <div className="grey-div">3:56</div>
            </div>
            <div className="lesson">
              <div>
                2.أنواع التصاميم الجرافيكية المختلفة (مطبوعات، رقمية، وغيرها).
              </div>
              <div className="grey-div">5:14</div>
            </div>
            <div className="lesson">
              <div>3.أدوات وموارد التصميم الأساسية.</div>
              <div className="grey-div">5:14</div>
            </div>
          </section>
        ) : null}
        <section className="lessons dropdown">
          <div className="course-intro">
            <div>
              <img className="pointer" src={Down} />
            </div>
            <div className="pointer">إتقان برامج التصميم الأساسية</div>
          </div>
          <div className="lesson-info">
            <div className="lessons-numb">5 درس</div>
            <div className="lessons-dur">6 ساعات ونصف</div>
          </div>
        </section>
        <div className="lessons dropdown">
          <div className="course-intro">
            <div>
              <img className="pointer" src={Down} />
            </div>
            <div className="pointer">تطبيق المعرفة وإنشاء المشاريع</div>
          </div>
          <div className="lesson-info">
            <div className="lessons-numb">5 درس</div>
            <div className="lessons-dur">6 ساعات ونصف</div>
          </div>
        </div>
      </section>
      <section className="cto-container">
        <button className="sub-btn">سجل الآن</button>
      </section>
    </>
  );
}

export default CoursePath;
