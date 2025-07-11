/* DoctorPortal.tsx */

import React from "react";
import Sidebar from "../../components/Sidebars/Doctor/Sidebar";
import styles from "./DoctorPortal.module.css";
import { Box } from "@mui/material";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PeopleIcon from "@mui/icons-material/People";
import ReviewIcon from "@mui/icons-material/Comment";
import AppointmentIcon from "@mui/icons-material/Today";
import SurgeryIcon from "@mui/icons-material/Healing";

type overviewItem = {
    label: string;
    count: number;
    Icon: React.ElementType;
    color: string;
};

const items: overviewItem[] = [
    { label: "patient", count: 0, Icon: PeopleIcon, color: "#58b2fc" },
    { label: "review", count: 0, Icon: ReviewIcon, color: "#f0b050" },
    { label: "appointment", count: 0, Icon: AppointmentIcon, color: "#7ac27d" },
    { label: "surgery", count: 0, Icon: SurgeryIcon, color: "#ff776d" },
]

function Portal() {
    const renderItem = ({ label, count, Icon, color }: overviewItem) => (
        <Box className={styles.overviewTile}>
            <Box className={styles.iconBox}>
                <Icon className={styles.itemIcon} style={{ color: color }}/>
            </Box>

            <Box className={styles.tileTextBox}>
                <span className={styles.tileCount}>{count}</span>
                <span className={styles.tileLabel}>{label}</span>
            </Box>
        </Box>
    );

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
                <div className={styles.mainContainer}>
                    <div className={styles.overviewContainer}>
                        <h1>Daily Overview</h1>
                        <div className={styles.overviewTabs}>{items.map(renderItem)}</div>
                    </div>
                </div>
                <div className={styles.leftBar}>
                    <div className={styles.calendarContainer}>

                    </div>
                    <div className={styles.notificationsContainer}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portal
