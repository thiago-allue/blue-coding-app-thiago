import React from 'react';
import styles from './ButtonAddNewLocation.module.css';

interface BuilderIOButtonProps {
    onClick?: () => void;
}

const ButtonAddNewLocation: React.FC<BuilderIOButtonProps> = ({ onClick }) => {
    return (
        <button
            className={styles.locationButton}
            onClick={onClick}
            aria-label="Add New Location"
        >
            <span className={styles.locationText}>Add New Location</span>
            <span id={styles.plusIcon}>+</span>
        </button>
    );
};

export default ButtonAddNewLocation;
