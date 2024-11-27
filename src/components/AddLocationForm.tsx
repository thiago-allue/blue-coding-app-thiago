// Form component for adding a new location

import React, { useState, useEffect } from 'react';
import { Location, ContactInfo } from '@/types/Location';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddLocationForm.module.css';

interface Props {
  onSave: (location: Location) => void;
  onCancel: () => void;
}

const AddLocationForm: React.FC<Props> = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    fullName: '',
    jobPosition: '',
    email: '',
    phone: '',
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validate = () => {
      return (
        title.trim() !== '' &&
        address.trim() !== '' &&
        contactInfo.fullName.trim() !== '' &&
        contactInfo.jobPosition.trim() !== '' &&
        contactInfo.email.trim() !== '' &&
        contactInfo.phone.trim() !== ''
      );
    };
    setIsValid(validate());
  }, [title, address, contactInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const newLocation: Location = {
      id: uuidv4(),
      title,
      address,
      contactInfo,
    };
    onSave(newLocation);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>New Location</h3>
      </div>
      <button className={styles.closeButton} onClick={onCancel}>x</button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Title *</label>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className={styles.label}>Enter the address *</label>
        <input
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <section>
          <h2 className={styles.sectionHeader}>Contact information</h2>
          <hr className={styles.divider}/>
        </section>
        <label className={styles.label}>Full Name *</label>
        <input
          className={styles.input}
          value={contactInfo.fullName}
          onChange={(e) => setContactInfo({...contactInfo, fullName: e.target.value})}
          required
        />
        <label className={styles.label}>Job Position *</label>
        <input
          className={styles.input}
          value={contactInfo.jobPosition}
          onChange={(e) => setContactInfo({...contactInfo, jobPosition: e.target.value})}
          required
        />
        <label className={styles.label}>Email Address *</label>
        <input
          className={styles.input}
          type="email"
          value={contactInfo.email}
          onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
          required
          placeholder="name@example.com"
        />
        <label className={styles.label}>Phone *</label>
        <input
          className={styles.input}
          value={contactInfo.phone}
          onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
          required
          placeholder="(xxx) xxx-xxxx"
        />
        <button
          className={`${styles.saveButton} ${isValid ? '' : styles.disabled}`}
          type="submit"
          disabled={!isValid}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddLocationForm;
