import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../Assets/facebook.png";
import InstaIcon from "../Assets/insta.png";
import TelegramIcon from "../Assets/telegram.png";
import CallIcon from "../Assets/call.png";
import TikTokIcon from "../Assets/tiktok.png";
import CartSib from "../Assets/carte_CIB 1.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="sections">
          <div className="header">
            <h3>عن هوسكا التعليمية</h3>
          </div>
          <div className="yellow-line"></div>
          <div className="f-links">
            <div>
              <Link to="/" className="footer-link">
                عن المنصة
              </Link>
            </div>
            <div>
              <Link to="/" className="footer-link">
                سياسة الخصوصية
              </Link>
            </div>
            <div>
              <Link to="/" className="footer-link">
                قواعد عامة
              </Link>
            </div>
          </div>
        </section>
        <section className="sections">
          <div className="header">
            <h3>روابط</h3>
          </div>
          <div className="yellow-line"></div>
          <div className="f-links">
            <div>
              <Link to="/hoskadev-task" className="footer-link">
                الدورات
              </Link>
            </div>
            <div>
              <Link className="footer-link">المقالات</Link>
            </div>
          </div>
        </section>
        <section className="sections">
          <div className="header">
            <h3>تحقق من شهادتك</h3>
          </div>
          <div>
            <div className="check">
              <input type="text" className="input" />
              <button type="submit" className="check-btn">
                تحقق
              </button>
            </div>
          </div>
          <div className="algeria-post">
            <img src={CartSib} alt="CartSib Icon" />
          </div>
        </section>
        <section className="icons-section">
          <div className="header">
            <h3>تابعنا</h3>
          </div>
          <div className="yellow-line"></div>
          <div className="icons">
            <div>
              <img src={InstaIcon} alt="InstagramIcon" className="icon" />
            </div>
            <div>
              <img src={FacebookIcon} alt="FacebookIcon" className="icon" />
            </div>
            <div>
              <img src={CallIcon} alt="PhoneIcon" className="icon" />
            </div>
            <div>
              <img src={TelegramIcon} alt="TelegramIcon" className="icon" />
            </div>
            <div>
              <img src={TikTokIcon} alt="TikTokIcon" className="icon" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
