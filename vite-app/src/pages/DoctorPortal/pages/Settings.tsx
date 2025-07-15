import React from "react";
import styles from "../DoctorPortal.module.css";

function Settings() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Settings</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Settings interface will be implemented here</p>
                {/* User preferences, account settings, and system configuration will be added here */}
            </div>
        </div>
    );
}

export default Settings; 