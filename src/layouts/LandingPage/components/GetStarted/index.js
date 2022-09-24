import React, { useEffect } from "react";
import styles from "./GetStarted.module.scss";
import { getDataCookie } from "../../../../utils/authorization";


const GetStarted = () => {

  return (
    <div className="container">
      <div className={styles.getStarted}>
        <div className={styles.gsInfo}>
          <h1>Temukan developer berbakat dan terbaik di berbagai bidang keahlian</h1>
        </div>
        <div className={styles.gsButton}>
          <button>Mulai Dari Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
