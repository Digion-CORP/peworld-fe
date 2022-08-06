import React from "react";
import styles from "./Signin.module.scss";
import Link from "next/link";
import {FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const SigninLayout = () => {
  return (
    <>
      <div className={`${styles.signinLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.title}>
            <h2>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
            <p>
              Create a new account here
            </p>
            <Link href="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
          <div className={styles.leftBg}></div>
          <img src="/logo/log.svg" alt="" />
        </div>
        <div className={`${styles.right} col-md-6`}>
          <div className={styles.logo}>
            <Link href='/#'><img src="/logo/logo.svg" alt="logo" /></Link>
            <button>Signup</button>
          </div>
          <h1>Sign In</h1>
          <form>
            <label>Email</label>
            <br />
            <input type="text" name="email" placeholder="Enter your email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <Link href="/#">
              <p>Forgot your password?</p>
            </Link>
            <button>Sign In</button>
            <div className={styles.loginWith}>
              <h3>Or login with : </h3>
              <div className={styles.socialBox}>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaFacebookF className={styles.socialIcon}/>
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaGoogle className={styles.socialIcon}/>
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaTwitter className={styles.socialIcon}/>
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaLinkedinIn className={styles.socialIcon}/>
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninLayout;
