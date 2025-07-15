import React from "react";
import styles from "../DoctorPortal.module.css";

function Departments() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Departments</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Department management interface will be implemented here</p>
                {/* Department list, structure, and management tools will be added here */}
            </div>
        </div>
    );
}

export default Departments; 