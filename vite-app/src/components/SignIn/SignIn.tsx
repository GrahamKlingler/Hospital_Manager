/* SignIn.tsx */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SignIn.module.css";
import HomeNavBar from "../HomeNavBar/HomeNavBar";

export default function SignIn() {
  const [role, setRole] = useState<"doctor" | "patient">("doctor");

  return (
    <>
      <HomeNavBar />
      <div className={styles.container}>
        {/* Toggle Track */}
        <div className={styles.toggleButtons}>
          {/* Sliding thumb */}
          <motion.div
            className={styles.slider}
            initial={false}
            animate={{ x: role === "doctor" ? 0 : "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          />
          <button
            className={role === "doctor" ? styles.active : ""}
            onClick={() => setRole("doctor")}
          >
            Doctor
          </button>
          <button
            className={role === "patient" ? styles.active : ""}
            onClick={() => setRole("patient")}
          >
            Patient
          </button>
        </div>

        {/* Sliding Forms */}
        <div className={styles.sections}>
          <AnimatePresence mode="wait">
            {role === "doctor" ? (
              <motion.div
                key="doctor"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.section}
              >
                <div className={styles.formContainer}>
                <h2>Doctor Sign In</h2>
                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <label>First Name</label>
                      <input type="text" name="doctorFirstName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Last Name</label>
                      <input type="text" name="doctorLastName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>License Number</label>
                      <input type="text" name="licenseNumber" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Specialization</label>
                      <input type="text" name="specialization" required />
                    </div>
                    <div className={styles.formDivider}>Contact</div>
                    <div className={styles.formGroup}>
                      <label>Phone</label>
                      <input type="tel" name="doctorPhone" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email</label>
                      <input type="email" name="doctorEmail" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Office Location</label>
                      <input type="text" name="officeLocation" required />
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="patient"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.section}
              >
                <div className={styles.formContainer}>
                <h2>Patient Sign In</h2>
                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <label>First Name</label>
                      <input type="text" name="patientFirstName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Last Name</label>
                      <input type="text" name="patientLastName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Date of Birth</label>
                      <input type="date" name="dob" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Gender</label>
                      <select name="gender" required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formDivider}>Contact</div>
                    <div className={styles.formGroup}>
                      <label>Phone</label>
                      <input type="tel" name="patientPhone" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email</label>
                      <input type="email" name="patientEmail" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Address</label>
                      <input type="text" name="address" required />
                    </div>
                    <div className={styles.formDivider}>Emergency Contact</div>
                    <div className={styles.formGroup}>
                      <label>Name</label>
                      <input type="text" name="emergencyName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Relation</label>
                      <input type="text" name="emergencyRelation" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Phone</label>
                      <input type="tel" name="emergencyPhone" required />
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
