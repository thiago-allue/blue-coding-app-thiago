// Initial list of locations for the application

import { Location } from '@/types/Location';

export const initialLocations: Location[] = [
    {
        id: '1',
        title: 'Headquarters',
        address: '3763 W. Dallas St.',
        contactInfo: {
            fullName: 'Hellena John',
            jobPosition: 'Software Tester',
            email: 'georgia.young@example.com',
            phone: '(808) 555-0111',
        },
    },
    {
        id: '2',
        title: 'Branch Office A',
        address: '1234 E. Market Ave.',
        contactInfo: {
            fullName: 'Michael Smith',
            jobPosition: 'Project Manager',
            email: 'michael.smith@example.com',
            phone: '(909) 555-0222',
        },
    },
    {
        id: '3',
        title: 'Branch Office B',
        address: '5678 N. Central Blvd.',
        contactInfo: {
            fullName: 'Sarah Johnson',
            jobPosition: 'HR Specialist',
            email: 'sarah.johnson@example.com',
            phone: '(606) 555-0333',
        },
    },
    {
        id: '4',
        title: 'Satellite Office',
        address: '9101 W. Elm St.',
        contactInfo: {
            fullName: 'David Lee',
            jobPosition: 'IT Support',
            email: 'david.lee@example.com',
            phone: '(505) 555-0444',
        },
    },
];
