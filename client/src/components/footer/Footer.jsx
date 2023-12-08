import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid py-5 text-white">
                <div style={{gap: '16rem'}} className="d-flex flex-wrap align-items-start justify-content-center">
                    <div className='foot-col'>
                        <h2><Link to="/" className={styles.logo}>Filmster</Link></h2>
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