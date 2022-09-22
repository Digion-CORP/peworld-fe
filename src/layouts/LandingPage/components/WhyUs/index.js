import React from 'react'
import styles from './WhyUs.module.scss'

const WhyUs = () => {
  return (
    <div className="container">
        <div className={`${styles.whyUs} row`}>
            <div className={`${styles.left} col-md-6`} data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
                <img src="images/img1.png" alt="logo" />
            </div>
            <div className={`${styles.right} col-md-6`} data-aos="fade-up" data-aos-delay="900" data-aos-duration="2000">
                <h1>Kenapa harus mencari talent di Peworld?</h1>
                <div className={styles.detailsBox}>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Talent berbakat dari berbagai bidang
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Siap tempur secara professional
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                       Talent menguasai bahasa pemrograman terkini
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                       Terdiri dari perusahaan ternama
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs