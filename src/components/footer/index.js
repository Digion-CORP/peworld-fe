import React from "react";
import styles from "./Footer.module.scss";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.logo}>
          <Link href='/#'>
            <picture><img src="/logo/logowhite.svg" alt="" /></picture></Link>
          <p>Talenta terbaik negeri untuk perubahan revolusi 4.0</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>2020 Peworld. All right reserved</div>
          <div className={styles.bottomLeft}>
            <div className={styles.content}>Telepon</div>
            <div className={styles.content}>Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
