// Component for adding a new location card

import React from 'react';
import styles from './CardAdd.module.css';
import { Location } from '@/types/Location';
import AddLocationForm from './AddLocationForm';

interface CardAddProps {
    onSave: (location: Location) => void;
    onCancel: () => void;
}

const CardAdd: React.FC<CardAddProps> = ({ onSave, onCancel }) => {
    return (
        <div className={styles.cardAdd}>
            <AddLocationForm onSave={onSave} onCancel={onCancel} />
        </div>
    );
};

export default CardAdd;
