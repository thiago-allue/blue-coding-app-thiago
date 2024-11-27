// Home page component

import React from 'react';
import LocationList from '@/components/LocationList';
import styles from './index.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <LocationList />
        </div>
    );
};

export default HomePage;
