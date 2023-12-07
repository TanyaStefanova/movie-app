import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid py-5 text-white">
                <div style={{gap: '16rem'}} className="d-flex flex-wrap align-items-start justify-content-center">
                    <div className='foot-col'>
                        <h2><Link to="/" className={styles.logo}>Filmster</Link></h2>
                        {/* <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" width={100}/> */}
                        {/* <button className='btn btn-light'> JOIN THE COMMUNITY</button> */}
                    </div>
                    <div className={styles.footCol}>
                        <ul>
                            <li to={"https://www.themoviedb.org/about"}>About Us</li>
                            <li to="https://www.themoviedb.org/about/staying-in-touch">Contact Us</li>
                            <li to="https://www.themoviedb.org/talk">Help center</li>
                        </ul>

                    </div>

                    <div className={styles.footCol}>
                        <ul>
                            <li href="#">Contribution Bible</li>
                            <li href="#">Add New Movie</li>
                            <li href="#">Add New TV Show</li>
                        </ul>
                    </div>
                    
                    <div className={styles.footCol}>
                        <ul>
                        <li href="#">Terms of Use</li>
                        <li href="#">Privacy Policy</li>
                        <li href="#">Cookie Preferences</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}