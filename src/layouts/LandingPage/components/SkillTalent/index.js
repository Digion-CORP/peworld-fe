import React from "react";
import styles from "./SkillTalent.module.scss";

const SkillTalent = () => {
  return (
    <div className="container">
      <div className={`${styles.skillTalent} row`}>
        <div className={`${styles.left} col-md-6`} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
            <h1>Skill Talent</h1>
            <p>Bahasa pemrograman terkini yang di kuasai oleh setiap developer</p>
            <div className={styles.detailsBox} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Java
                </div>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Golang
                </div>
            </div>
            <div className={styles.detailsBox} data-aos="fade-up" data-aos-delay="700" data-aos-duration="2000">
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Kotlin
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    C++
                </div>
            </div>
            <div className={styles.detailsBox} data-aos="fade-up" data-aos-delay="900" data-aos-duration="2000">
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    PHP
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Ruby
                </div>
            </div>
            <div className={styles.detailsBox} data-aos="fade-up"data-aos-delay="1000" data-aos-duration="2000">
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Javascript
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    10+ Bahasa lainnya
                </div>
            </div>
        </div>
        <div className={`${styles.right} col-md-6`} data-aos="fade-up" data-aos-delay="1400" data-aos-duration="2000">
          <img src="/images/img2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SkillTalent;
