import React from "react";
import styles from "../DoctorPortal.module.css";

function Doctors() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Doctors</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Doctor management interface will be implemented here</p>
                {/* Doctor list, profiles, and management tools will be added here */}
            </div>
        </div>
    );
}

export default Doctors; 