/* DoctorPortal.tsx */

import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebars/Doctor/Sidebar";
import styles from "./DoctorPortal.module.css";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

// Import page components
import {
    Dashboard,
    Calendar,
    Patients,
    StaffSchedule,
    Doctors,
    Departments,
    Settings,
    HelpCenter
} from "./pages";

function Portal() {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle logout
    const handleLogout = () => {
        // Add logout logic here
        navigate("/signin");
    };

    return (
        <div className={styles.portalContainer}>
            <div className={styles.topBar}>
                <div className={styles.topLeftBrand}>
                    <MonitorHeartIcon className={styles.brandIcon}/>
                    <h1>MediData</h1>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <Sidebar currentPath={location.pathname} onLogout={handleLogout} />
                <div className={styles.mainContainer}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="patients" element={<Patients />} />
                        <Route path="staff" element={<StaffSchedule />} />
                        <Route path="doctors" element={<Doctors />} />
                        <Route path="departments" element={<Departments />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="help" element={<HelpCenter />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Portal
