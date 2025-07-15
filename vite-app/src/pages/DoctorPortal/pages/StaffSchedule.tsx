import React from "react";
import styles from "../DoctorPortal.module.css";

function StaffSchedule() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Staff Schedule</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Staff scheduling interface will be implemented here</p>
                {/* Staff schedule management tools will be added here */}
            </div>
        </div>
    );
}

export default StaffSchedule; 