import React from 'react';
import { Location } from '@/types/Location';
import styles from './LocationItem.module.css';

interface Props {
    location: Location;
    onClick: () => void;
}

const LocationItem: React.FC<Props> = ({ location, onClick }) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <div className={styles.locationItem}>
                <h3 className={styles.locationTitle}>{location.title}</h3>
                <p className={styles.locationAddress}>{location.address}</p>
            </div>
            <img
                loading="lazy"
                src="/arrow_down.svg"
                alt=""
                className={styles.locationIcon}
            />
        </div>
    );
};

export default LocationItem;