import React from "react";
import styles from "../DoctorPortal.module.css";

function Patients() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Patients</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Patient management interface will be implemented here</p>
                {/* Patient list, search, and management tools will be added here */}
            </div>
        </div>
    );
}

export default Patients; 