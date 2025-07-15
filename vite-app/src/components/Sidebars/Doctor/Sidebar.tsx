import React from "react";
import { useNavigate } from "react-router-dom";
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
    path: string;
};

interface SidebarProps {
    currentPath: string;
    onLogout: () => void;
}

const mainItems: MenuItem[] = [
    { key: "dashboard", label: "Dashboard", Icon: DashboardIcon, path: "/doctor-portal/dashboard" },
    { key: "calendar", label: "Calendar", Icon: CalendarTodayIcon, path: "/doctor-portal/calendar" },
    { key: "patients", label: "Patients", Icon: PeopleIcon, path: "/doctor-portal/patients" },
    { key: "staff", label: "Staff Schedule", Icon: ScheduleIcon, path: "/doctor-portal/staff" },
    { key: "doctors", label: "Doctors", Icon: MedicalServicesIcon, path: "/doctor-portal/doctors" },
    { key: "departments", label: "Departments", Icon: ApartmentIcon, path: "/doctor-portal/departments" },
]

const bottomItems: MenuItem[] = [
    { key: "settings", label: "Settings", Icon: SettingsIcon, path: "/doctor-portal/settings" },
    { key: "help", label: "Help Center", Icon: HelpOutlineIcon, path: "/doctor-portal/help" },
]

function Sidebar({ currentPath, onLogout }: SidebarProps) {
    const navigate = useNavigate();

    const handleItemClick = (item: MenuItem) => {
        if (item.key === "logout") {
            onLogout();
        } else {
            navigate(item.path);
        }
    };

    const renderItem = ({ key, label, Icon, path }: MenuItem) => {
        const isSelected = currentPath === path || (currentPath === "/doctor-portal" && path === "/doctor-portal/dashboard");
        
        return (
            <div
                key={key}
                className={`${styles.sidebarItem} ${isSelected ? styles.selected : ""}`}
                onClick={() => handleItemClick({ key, label, Icon, path })}
            >
                <Icon className={styles.icon} />
                <span className={styles.label}>{label}</span>
            </div>
        );
    };

    const renderLogoutItem = () => (
        <div
            className={styles.sidebarItem}
            onClick={onLogout}
        >
            <LogoutIcon className={styles.icon} />
            <span className={styles.label}>Log Out</span>
        </div>
    );

    return (
        <nav className={styles.sidebar}>
            <div className={styles.menu}>{mainItems.map(renderItem)}</div>
            <div className={styles.menuBottom}>
                {bottomItems.map(renderItem)}
                {renderLogoutItem()}
            </div>
        </nav>
    );
}

export default Sidebar
