import React from "react";
import styles from "../DoctorPortal.module.css";

function Calendar() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Calendar</h1>
            <div style={{ height: "600px", backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Full calendar view will be implemented here</p>
                {/* Full calendar component will be added here */}
            </div>
        </div>
    );
}

export default Calendar; 