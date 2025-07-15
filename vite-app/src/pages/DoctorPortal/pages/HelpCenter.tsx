import React from "react";
import styles from "../DoctorPortal.module.css";

function HelpCenter() {
    return (
        <div className={styles.overviewContainer}>
            <h1>Help Center</h1>
            <div style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--border-rad-default)", padding: "1rem" }}>
                <p>Help and support interface will be implemented here</p>
                {/* FAQ, documentation, and support contact will be added here */}
            </div>
        </div>
    );
}

export default HelpCenter; 