/* Home.tsx */

import HomeNavBar from "../../components/HomeNavBar/HomeNavBar"
import styles from "./Home.module.css"
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

function Home() {
    return (
        <>
            <HomeNavBar/>
            <div className={styles.centerWindow}>
                <div className={styles.windowContent}>
                    <div className={styles.logoSection}>
                        <MonitorHeartIcon className={styles.bigLogo} />
                    </div>
                    <div className={styles.textSection}>
                        <h1 className={styles.heading}>Welcome to MediData</h1>
                        <p className={styles.subtext}>Your health, organized and accessible.</p>
                        <button className={styles.getStartedBtn}>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
