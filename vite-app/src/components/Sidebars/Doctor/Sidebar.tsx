import React, { useState } from "react";
import styles from "./Sidebar.module.css";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";

type MenuItem = {
    key: string;
    label: string;
    Icon: React.ElementType;
};

const mainItems: MenuItem[] = [
    { key: "dashboard", label: "Dashboard", Icon: DashboardIcon },
    { key: "calendar", label: "Calendar", Icon: CalendarTodayIcon },
    { key: "patients", label: "Patients", Icon: PeopleIcon },
    { key: "staff", label: "Staff Schedule", Icon: ScheduleIcon },
    { key: "doctors", label: "Doctors", Icon: MedicalServicesIcon },
    { key: "departments", label: "Departments", Icon: ApartmentIcon },
]

const bottomItems: MenuItem[] = [
    { key: "settings", label: "Settings", Icon: SettingsIcon },
    { key: "help", label: "Help Center", Icon: HelpOutlineIcon },
    { key: "logout", label: "Log Out", Icon: LogoutIcon },
]

function Sidebar() {
    const [selected, setSelected] = useState<string>("dashboard");

    const renderItem = ({ key, label, Icon }: MenuItem) => (
        <div
            key={key}
            className={`${styles.sidebarItem} ${selected === key ? styles.selected : ""
                }`}
            onClick={() => setSelected(key)}
        >
            <Icon className={styles.icon} />
            <span className={styles.label}>{label}</span>
        </div>
    );

    return (
        <nav className={styles.sidebar}>
            <div className={styles.menu}>{mainItems.map(renderItem)}</div>
            <div className={styles.menuBottom}>{bottomItems.map(renderItem)}</div>
        </nav>
    );
}

export default Sidebar
