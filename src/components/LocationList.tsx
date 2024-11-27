import React, { useState } from 'react';
import { Location } from '@/types/Location';
import LocationItem from './LocationItem';
import { initialLocations } from '@/data/initialLocations';
import styles from './LocationList.module.css';
import { EmployeeCard } from './EmployeeCard';
import ButtonAddNewLocation from '@/components/ButtonAddNewLocation';
import CardAdd from './CardAdd';
import EditLocationForm from './EditLocationForm';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const LocationList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>(initialLocations);
    const [isAdding, setIsAdding] = useState(false);
    const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
    const [editingLocationId, setEditingLocationId] = useState<string | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [locationToDelete, setLocationToDelete] = useState<string | null>(null);

    const handleAddLocation = (newLocation: Location) => {
        setLocations([newLocation, ...locations]);
        setIsAdding(false);
    };

    const handleDeleteLocation = (id: string) => {
        setLocations(locations.filter((loc) => loc.id !== id));
    };

    const handleEditLocation = (updatedLocation: Location) => {
        setLocations(locations.map((loc) => (loc.id === updatedLocation.id ? updatedLocation : loc)));
        setEditingLocationId(null);
    };

    const handleEditEmployee = (id: string) => {
        setEditingLocationId(id);
    };

    const handleDeleteEmployee = (id: string) => {
        setDeleteDialogOpen(true);
        setLocationToDelete(id);
    };

    const confirmDelete = () => {
        if (locationToDelete) {
            handleDeleteLocation(locationToDelete);
            if (selectedLocationId === locationToDelete) {
                setSelectedLocationId(null);
            }
        }
        setDeleteDialogOpen(false);
        setLocationToDelete(null);
    };

    const cancelDelete = () => {
        setDeleteDialogOpen(false);
        setLocationToDelete(null);
    };

    return (
        <div className={styles.container}>
            <span className={styles.offices_label}>Offices</span>
            {isAdding ? (
                <CardAdd onSave={handleAddLocation} onCancel={() => setIsAdding(false)} />
            ) : (
                <ButtonAddNewLocation onClick={() => setIsAdding(true)} />
            )}
            {locations.map((location) => {
                if (location.id === editingLocationId) {
                    return (
                        <EditLocationForm
                            key={location.id}
                            location={location}
                            onSave={handleEditLocation}
                            onCancel={() => setEditingLocationId(null)}
                        />
                    );
                } else if (location.id === selectedLocationId) {
                    return (
                        <EmployeeCard
                            key={location.id}
                            data={{
                                name: location.contactInfo.fullName,
                                title: location.contactInfo.jobPosition,
                                email: location.contactInfo.email,
                                phone: location.contactInfo.phone,
                                location: location.title,
                                address: location.address,
                            }}
                            onEdit={() => handleEditEmployee(location.id)}
                            onDelete={() => handleDeleteEmployee(location.id)}
                            onHeaderClick={() => setSelectedLocationId(null)}
                        />
                    );
                } else {
                    return (
                        <LocationItem
                            key={location.id}
                            location={location}
                            onClick={() => setSelectedLocationId(location.id)}
                        />
                    );
                }
            })}
            <Dialog
                open={deleteDialogOpen}
                onClose={cancelDelete}
                aria-labelledby="delete-dialog-title"
                aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-dialog-description">
                        Are you sure you want to delete this location?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LocationList;
