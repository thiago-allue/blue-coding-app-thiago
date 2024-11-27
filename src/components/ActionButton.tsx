// Component for action buttons in the employee card

import React from 'react';
import styles from './EmployeeCard.module.css';

import { ActionButtonProps } from "@/types/Employee";

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, variant }) => {
  return (
    <button
      className={`${styles.actionButton} ${styles[variant]}`}
      onClick={onClick}
      type="button"
    >
      <img
        src={icon}
        alt=""
        className={styles.actionIcon}
        loading="lazy"
      />
      <span className={styles.actionLabel}>{label}</span>
    </button>
  );
};
