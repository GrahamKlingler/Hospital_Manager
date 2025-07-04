import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import type { RoleType } from "../../components/LoginForm/LoginForm";
import styles from "./SignIn.module.css";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";

const roles: RoleType[] = [
  {
    key: "doctor",
    label: "Doctor",
    fields: [
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
  },
  {
    key: "patient",
    label: "Patient",
    fields: [
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
  },
];

export default function SignIn() {
  return (
    <>
      <HomeNavBar />
      <div className={styles.container}>
        <h1 className={styles.header}>Sign In</h1>
        <h3 className={styles.subtext}>Select your role and enter your credentials.</h3>
        <LoginForm roles={roles} />
      </div>
    </>
  );
}
