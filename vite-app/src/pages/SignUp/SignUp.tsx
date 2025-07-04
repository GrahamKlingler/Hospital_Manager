/* SignUp.tsx */

import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import type { RoleType } from "../../components/LoginForm/LoginForm";
import styles from "./SignUp.module.css";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";

const roles: RoleType[] = [
  {
    key: "doctor",
    label: "Doctor",
    fields: [
      { name: "doctorFirstName", label: "First Name", type: "text" },
      { name: "doctorLastName", label: "Last Name", type: "text" },
      { name: "licenseNumber", label: "License Number", type: "text" },
      { name: "specialization", label: "Specialization", type: "text" },
      { name: "dividerContactDoctor", type: "divider", label: "Contact" },
      { name: "doctorPhone", label: "Phone", type: "tel", placeholder: "(123) 456-7890" },
      { name: "doctorEmail", label: "Email", type: "email" },
      { name: "officeLocation", label: "Office Location", type: "text", fullWidth: true },
    ],
  },
  {
    key: "patient",
    label: "Patient",
    fields: [
      { name: "patientFirstName", label: "First Name", type: "text" },
      { name: "patientLastName", label: "Last Name", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ] },
      { name: "dividerContactPatient", type: "divider", label: "Contact" },
      { name: "patientPhone", label: "Phone", type: "tel", placeholder: "(123) 456-7890" },
      { name: "patientEmail", label: "Email", type: "email" },
      { name: "address", label: "Address", type: "text", fullWidth: true },
      { name: "dividerEmergencyContactPatient", type: "divider", label: "Emergency Contact" },
      { name: "emergencyName", label: "Emergency Contact Name", type: "text" },
      { name: "emergencyRelation", label: "Emergency Contact Relation", type: "text" },
      { name: "emergencyPhone", label: "Emergency Contact Phone", type: "tel", placeholder: "(123) 456-7890" },
    ],
  },
];

export default function SignUp() {
  return (
    <>
      <HomeNavBar />
      <div className={styles.container}>
        <h1 className={styles.header}>Create Account</h1>
        <h3 className={styles.subtext}>Choose your role, then complete the form to get started.</h3>
        <LoginForm roles={roles} />
      </div>
    </>
  );
}

