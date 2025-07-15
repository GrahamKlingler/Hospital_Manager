import React from "react";
import styles from "../DoctorPortal.module.css";
import { Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ReviewIcon from "@mui/icons-material/Comment";
import AppointmentIcon from "@mui/icons-material/Today";
import SurgeryIcon from "@mui/icons-material/Healing";
import Timeline from "../../../components/Calendars/ScheduleView/Timeline";
import { myEvents } from "../fillerevents";
import MiniCalendar from "../../../components/Calendars/MiniCalendar/MiniCalendar";

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

function Dashboard() {
    const renderItem = ({ label, count, Icon, color }: overviewItem) => (
        <Box className={styles.overviewTile}>
            <Box className={styles.iconBox}>
                <Icon className={styles.itemIcon} style={{ color: color }}/>
            </Box>

            <Box className={styles.tileTextBox}>
                <span className={styles.tileCount}>{count}</span>
                <span className={styles.tileLabel}>{label}{count != 1 ? 's' : ''}</span>
            </Box>
        </Box>
    );

    return (
        <div className={styles.dashContainer}>
            <div className={styles.overviewContainer}>
                <h1>Daily Overview</h1>
                <div className={styles.overviewTabs}>{items.map(renderItem)}</div>
                <h1>Schedule</h1>
                <div className={styles.overviewSchedule}>
                    <Timeline events={myEvents}/>
                </div>
                <h1>Upcoming Appointments</h1>
                <div className={styles.upcomingAppoint}>
                    <div className={styles.appointmentsBox}>
                        <div className={styles.appointmentsHeader}>
                            <span>Name</span>
                            <span>Diagnosis</span>
                            <span>Date and Time</span>
                            <span>Notes</span>
                        </div>
                        <div className={styles.appointmentsRow}>
                            <span>John Doe</span>
                            <span>Flu</span>
                            <span>2024-06-10 09:00</span>
                            <span>First visit</span>
                        </div>
                        <div className={styles.appointmentsRow}>
                            <span>Jane Smith</span>
                            <span>Diabetes</span>
                            <span>2024-06-10 10:30</span>
                            <span>Follow-up</span>
                        </div>
                        <div className={styles.appointmentsRow}>
                            <span>Michael Brown</span>
                            <span>Hypertension</span>
                            <span>2024-06-10 11:15</span>
                            <span>Lab results</span>
                        </div>
                        <div className={styles.appointmentsRow}>
                            <span>Emily White</span>
                            <span>Asthma</span>
                            <span>2024-06-10 13:00</span>
                            <span>Routine check</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.leftBar}>
                <div className={styles.calendarContainer}>
                    <MiniCalendar events={[]}/>
                </div>
                <div className={styles.notificationsContainer}>
                    {/* Notifications will be added here */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard; 