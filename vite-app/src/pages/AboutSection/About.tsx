/* About.tsx */

import styles from "./About.module.css"
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; // For doctors
import SecurityIcon       from '@mui/icons-material/Security'; // first bullet
import DeviceHubIcon      from '@mui/icons-material/DeviceHub'; // second bullet
import AssignmentIndIcon  from '@mui/icons-material/AssignmentInd'; // third bullet

import PersonIcon              from '@mui/icons-material/Person'; // For Patients
import DashboardIcon           from '@mui/icons-material/Dashboard'; // first bullet
import ChatIcon                from '@mui/icons-material/Chat'; // second bullet
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // third bullet


function About() {
    return (
        <>
            <HomeNavBar/>
            <div className={styles.aboutContainer}>
                <h1 className={styles.pageHeader}>Meet MediData</h1>
                <div className={styles.sectionsRow}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}><LocalHospitalIcon className={styles.sectionIconSvg} /> Provider Tools</h2>
                        <div className={styles.pointsGroup}>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><SecurityIcon className={styles.bulletIcon} /> Unified, HIPAA Compliant Records</h3>
                                <p className={styles.pointSubtext}>Access and manage all patient data securely in one place, ensuring compliance with healthcare regulations.</p>
                            </div>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><DeviceHubIcon className={styles.bulletIcon} /> Real-Time Device Integration</h3>
                                <p className={styles.pointSubtext}>Seamlessly connect with medical devices for instant updates and more informed clinical decisions.</p>
                            </div>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><AssignmentIndIcon className={styles.bulletIcon} /> Role-Based Access & Audit Trails</h3>
                                <p className={styles.pointSubtext}>Control who sees what and track every access for maximum security and accountability.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}><PersonIcon className={styles.sectionIconSvg} /> Patient Care Center</h2>
                        <div className={styles.pointsGroup}>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><DashboardIcon className={styles.bulletIcon} /> 24/7 Personal Health Dashboard</h3>
                                <p className={styles.pointSubtext}>Monitor your health records, appointments, and progress anytime, anywhere.</p>
                            </div>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><ChatIcon className={styles.bulletIcon} /> Secure Patient-Provider Messaging</h3>
                                <p className={styles.pointSubtext}>Communicate directly with your care team in a safe, private environment.</p>
                            </div>
                            <div className={styles.point}>
                                <h3 className={styles.pointHeader}><NotificationsActiveIcon className={styles.bulletIcon} /> Automated Reminders & Follow-Ups</h3>
                                <p className={styles.pointSubtext}>Never miss an appointment or medication with intelligent reminders and follow-up notifications.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About
