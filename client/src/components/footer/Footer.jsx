import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid py-5 text-white">
                <div className="d-flex flex-wrap align-items-start justify-content-center gap-5">
                    <div className='foot-col'>
                        <h2><Link to="/" className={styles.logo}>Filmster</Link></h2>
                        {/* <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" width={100}/> */}
                        {/* <button className='btn btn-light'> JOIN THE COMMUNITY</button> */}
                    </div>
                    <div className={styles.footCol}>
                        <b>THE BASICS</b>
                        <ul>
                            <li to={"https://www.themoviedb.org/about"}>About Tmdb</li>
                            <li to="https://www.themoviedb.org/about/staying-in-touch">Contact Us</li>
                            <li to="https://www.themoviedb.org/talk">Support Forums</li>
                            <li to="https://developer.themoviedb.org/docs" target='_blank'>Api</li>
                            <li to="https://status.themoviedb.org/">System Status</li>
                        </ul>

                    </div>
                    <div className={styles.footCol}>
                        <b>GET INVOLVED</b>
                        <ul>
                            <li href="#">Contribution Bible</li>
                            <li href="#">Add New Movie</li>
                            <li href="#">Add New TV Show</li>
                        </ul>


                    </div>
                    <div className={styles.footCol}>
                        <b>COMMUNITY</b>
                        <ul>
                            <li href="#">Guidelines</li>
                            <li href="#">Discussions</li>
                            <li href="#">Leaderboard</li>
                        </ul>


                    </div>
                    <div className={styles.footCol}>
                        <b>LEGAL</b>
                        <ul>
                        <li href="#">Terms of Use</li>
                        <li href="#">API Terms of Use</li>
                        <li href="#">Privacy Policy</li>
                        <li href="#">DMCA Policy</li>

                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
}