// Interface for contact information

export interface ContactInfo {
    fullName: string;
    jobPosition: string;
    email: string;
    phone: string;
}

// Interface for location data

export interface Location {
    id: string;
    title: string;
    address: string;
    contactInfo: ContactInfo;
}
