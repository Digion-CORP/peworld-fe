import React from "react";
import styles from "./Testimony.module.scss";
import Slider from "react-slick";
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const Testimony = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
            <TbChevronRight className="btn-icon"/> 
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <TbChevronLeft className="btn-icon"/>
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.testimony}>
      <h1>Their opinion about Peworld</h1>
      <div className={styles.testiBox}>
        <Slider {...settings}>
          <div className={styles.testiCard} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
            <div className={styles.testiImg}>
              <img src="/images/img4.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Harry Styles</h2>
              <h3>Web Developer</h3>
              <p>
                Excelent work!
              </p>
            </div>
          </div>
          <div className={styles.testiCard} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
            <div className={styles.testiImg}>
              <img src="/images/img5.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Niall Horan</h2>
              <h3>Frontend Developer</h3>
              <p>Good Job 👍</p>
            </div>
          </div>
          <div className={styles.testiCard} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
            <div className={styles.testiImg}>
              <img src="/images/img6.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Louis Tomlinson</h2>
              <h3>Fullstack Developer</h3>
              <p>Wow! Amazing work</p>
            </div>
          </div>
          <div className={styles.testiCard} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
            <div className={styles.testiImg}>
              <img src="/images/img6.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Louis Tomlinson</h2>
              <h3>Backend Developer</h3>
              <p>Excelent Work!</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
