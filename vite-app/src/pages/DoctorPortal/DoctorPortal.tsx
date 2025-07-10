/* DoctorPortal.tsx */

import Sidebar from "../../components/Sidebars/Doctor/Sidebar";
import styles from "./DoctorPortal.module.css";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

function Portal() {
    return (
        <div className={styles.portalContainer}>
            <div className={styles.topBar}>
                <div className={styles.topLeftBrand}>
                    <MonitorHeartIcon className={styles.brandIcon}/>
                    <h1>MediData</h1>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <Sidebar/>
                <div className={styles.overviewContainer}>
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    );
}

export default Portal
