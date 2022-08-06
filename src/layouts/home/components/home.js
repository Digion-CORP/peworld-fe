import styles from "./Home.module.scss"
import { FiSearch } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
// import Image from "next/image"
const Home = () => {
    return (<>
        <div className={styles.headers}>
            <div className="container">
                <div className={styles.pageTitle}>
                    <h4>Top Jobs</h4>
                </div>
            </div>
        </div>
        <div className={styles.contentFilter}>
            <div className="container">
                <div className={styles.filter}>
                    <div className={styles.search}>
                        <input type="search" placeholder="Search for any skill"></input>
                        <FiSearch className={styles.icon} />
                    </div>
                    <div className={styles.verticalLine}>
                        <div className={styles.line}>
                        </div>
                    </div>
                    <div className={`${styles.Dropdown} dropdown`}>
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort
                        </button>
                        <ul className={`${styles.dropMenu} dropdown-menu dropdown-menu-light mt-3`}>
                            <li><a className="dropdown-item" href="#">Sortir berdasrkan Skill</a></li>
                            <li><a className="dropdown-item" href="#">Sortir berdasarkan Freelance</a></li>
                            <li><a className="dropdown-item" href="#">Sortir berdasarkan Fulltime</a></li>
                        </ul>
                    </div>
                    <div className={styles.btnSearch}>
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contentCard}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.cardUser}>
                        <div className={styles.image}>
                            <img src="/assets/images/profile.png" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <p>Harry Styles</p>
                            </div>
                            <div className={styles.jobType}>
                                <p>Web developer - Fulltime</p>
                            </div>
                            <div className={styles.location}>
                                <span><HiOutlineLocationMarker className={styles.icon} /></span> 
                                Jakarta
                            </div>
                            <div className={styles.skills}>
                                <button>PHP</button>
                                <button>Javascript</button>
                                <button>HTML</button>
                            </div>
                        </div>
                        <div className={styles.btnProfile}>
                            <button>See Profile</button>
                        </div>
                    </div>
                    <div className={styles.horizontalLine}>
                        <div className={styles.hline}>
                        </div>
                    </div>
                    <div className={styles.cardUser}>
                        <div className={styles.image}>
                        <img src="/assets/images/profile.png" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <p>Harry Styles</p>
                            </div>
                            <div className={styles.jobType}>
                                <p>Web developer - Fulltime</p>
                            </div>
                            <div className={styles.location}>
                            <span><HiOutlineLocationMarker className={styles.icon} /></span> 
                                Jakarta
                            </div>
                            <div className={styles.skills}>
                                <button>PHP</button>
                                <button>Javascript</button>
                                <button>HTML</button>
                            </div>
                        </div>
                        <div className={styles.btnProfile}>
                            <button>See Profile</button>
                        </div>
                    </div>
                    <div className={styles.horizontalLine}>
                        <div className={styles.hline}>
                        </div>
                    </div>
                    <div className={styles.cardUser}>
                        <div className={styles.image}>
                        <img src="/assets/images/profile.png" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <p>Harry Styles</p>
                            </div>
                            <div className={styles.jobType}>
                                <p>Web developer - Fulltime</p>
                            </div>
                            <div className={styles.location}>
                            <span><HiOutlineLocationMarker className={styles.icon} /></span> 
                                Jakarta
                            </div>
                            <div className={styles.skills}>
                                <button>PHP</button>
                                <button>Javascript</button>
                                <button>HTML</button>
                            </div>
                        </div>
                        <div className={styles.btnProfile}>
                            <button>See Profile</button>
                        </div>
                    </div>
                    <div className={styles.horizontalLine}>
                        <div className={styles.hline}>
                        </div>
                    </div>
                    <div className={styles.cardUser}>
                        <div className={styles.image}>
                        <img src="/assets/images/profile.png" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <p>Harry Styles</p>
                            </div>
                            <div className={styles.jobType}>
                                <p>Web developer - Fulltime</p>
                            </div>
                            <div className={styles.location}>
                            <span><HiOutlineLocationMarker className={styles.icon} /></span> 
                                Jakarta
                            </div>
                            <div className={styles.skills}>
                                <button>PHP</button>
                                <button>Javascript</button>
                                <button>HTML</button>
                            </div>
                        </div>
                        <div className={styles.btnProfile}>
                            <button>See Profile</button>
                        </div>
                    </div>
                    <div className={styles.horizontalLine}>
                        <div className={styles.hline}>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className={styles.pagePagination}>
            <div className="container d-flex justify-content-center m-auto">
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex gap-2">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>)
}
export default Home