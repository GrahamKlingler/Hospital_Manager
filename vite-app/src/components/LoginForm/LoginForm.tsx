/* LoginForm.tsx */

import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import formatPhoneNumber from "../../utils/formatting";

export type FieldType = {
    name: string;
    label: string;
    type: string;
    options?: { value: string; label: string }[]; // for select fields
    fullWidth?: boolean;
    placeholder?: string;
};

export type RoleType = {
    key: string;
    label: string;
    fields: FieldType[];
};

interface LoginFormProps {
    roles: RoleType[];
    onSubmit?: (role: string, values: Record<string, string>) => void;
    initialRole?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ roles, onSubmit, initialRole }) => {
    const [role, setRole] = useState<string>(initialRole || roles[0].key);
    const [values, setValues] = useState<Record<string, string>>({});

    const currentRole = roles.find(r => r.key === role) || roles[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, fieldType?: string) => {
        let value = e.target.value;
        if (fieldType === "tel") {
            // Only allow up to 10 digits
            const digits = value.replace(/\D/g, "").slice(0, 10);
            value = formatPhoneNumber(digits);
        }
        setValues({ ...values, [e.target.name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) onSubmit(role, values);
    };

    const activeIndex = roles.findIndex(r => r.key === role);
    const indicatorX = `${activeIndex * 100}%`;

    return (
        <div className={styles.loginFormContainer}>
            <div
                className={styles.roleSelector}
                style={{ "--indicator-x": indicatorX } as React.CSSProperties}
            >
                {roles.map(r => {
                    const isActive = r.key === role;
                    return (
                        <button
                            key={r.key}
                            type="button"
                            className={`${styles.roleButton} ${isActive ? styles.active : ""}`}
                            onClick={() => setRole(r.key)}
                        >
                            {r.label}
                        </button>
                    );
                })}
            </div>
            {/* Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
                {currentRole.fields.map(field => {
                    if (field.type === "divider") {
                        return (
                            <div key={field.label} className={styles.formDivider}>
                                {field.label}
                            </div>
                        );
                    }
                    return (
                        <div
                            key={field.name}
                            className={
                                field.fullWidth
                                    ? `${styles.formGroup} ${styles.fullWidth}`
                                    : styles.formGroup
                            }
                        >
                            <label htmlFor={field.name}>{field.label}</label>
                            {field.type === "select" && field.options ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={values[field.name] || ""}
                                    onChange={e => handleChange(e, field.type)}
                                    required
                                >
                                    <option value="">Select</option>
                                    {field.options.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    value={values[field.name] || ""}
                                    onChange={e => handleChange(e, field.type)}
                                    required
                                    placeholder={field.placeholder}
                                />
                            )}
                        </div>
                    );
                })}
                <div className={styles.submitWrapper}>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
