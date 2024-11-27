
import React from 'react';
import styles from './EmployeeCard.module.css';
import { ActionButton } from './ActionButton';

import { EmployeeData } from "@/types/Employee";

interface EmployeeCardProps {
  data: EmployeeData;
  onEdit: () => void;
  onDelete: () => void;
  onHeaderClick: () => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ data, onEdit, onDelete, onHeaderClick }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader} onClick={onHeaderClick}>
        <div className={styles.locationInfo}>
          <h2 className={styles.locationTitle}>{data.location}</h2>
          <p className={styles.locationAddress}>{data.address}</p>
        </div>
        <img
          src="/arrow_up.svg"
          alt=""
          className={styles.locationIcon}
          loading="lazy"
        />
      </header>

      <section className={styles.cardContent}>
        <div className={styles.employeeInfo}>
          <h1 className={styles.employeeName}>{data.name}</h1>
          <p className={styles.employeeTitle}>{data.title}</p>
          <span className={styles.employeeEmail}>
            {data.email}
          </span>
          <span className={styles.employeePhone}>
            {data.phone}
          </span>
        </div>

        <div className={styles.divider} />

        <div className={styles.actions}>
          <ActionButton
            icon="/pencil.svg"
            label="Edit"
            onClick={onEdit}
            variant="default"
          />
          <ActionButton
            icon="/trash.svg"
            label="Delete"
            onClick={onDelete}
            variant="danger"
          />
        </div>
      </section>
    </article>
  );
};
