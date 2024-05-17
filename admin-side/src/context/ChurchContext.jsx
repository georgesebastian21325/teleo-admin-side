import React, { useState } from 'react';
import Church1Event from '../assets/Church1_Event.jpeg';

const applicants = [
    {
        name: "John Doe",
        email: "john@example.com",
        joined: "2 months ago",
        mobileNumber: "+63 123 456 2123",
        buildingNumber: "10",
        streetName: "Rizal Street",
        barangay: "Barangay 1",
        city: "Quezon City",
        province: "Metro Manila",
        postalCode: "1100",
        country: "Philippines"
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        joined: "3 months ago",
        mobileNumber: "+63 987 654 3210",
        buildingNumber: "15A",
        streetName: "Mabini Street",
        barangay: "Barangay 2",
        city: "Makati",
        province: "Metro Manila",
        postalCode: "1200",
        country: "Philippines"
    },
    {
        name: "John Doe",
        email: "john.doe2@example.com",
        joined: "2 months ago",
        mobileNumber: "+63 223 456 7890",
        buildingNumber: "20",
        streetName: "Luna Street",
        barangay: "Barangay 3",
        city: "Pasig",
        province: "Metro Manila",
        postalCode: "1600",
        country: "Philippines"
    },
    {
        name: "Jane Smith",
        email: "jane.smith2@example.com",
        joined: "3 months ago",
        mobileNumber: "+63 876 543 2109",
        buildingNumber: "25B",
        streetName: "Aguinaldo Street",
        barangay: "Barangay 4",
        city: "Taguig",
        province: "Metro Manila",
        postalCode: "1630",
        country: "Philippines"
    },
    {
        name: "John Doe",
        email: "john.doe3@example.com",
        joined: "2 months ago",
        mobileNumber: "+63 323 456 7890",
        buildingNumber: "30",
        streetName: "Bonifacio Street",
        barangay: "Barangay 5",
        city: "Manila",
        province: "Metro Manila",
        postalCode: "1000",
        country: "Philippines"
    },
    {
        name: "Jane Smith",
        email: "jane.smith3@example.com",
        joined: "3 months ago",
        mobileNumber: "+63 765 432 1098",
        buildingNumber: "35C",
        streetName: "Del Pilar Street",
        barangay: "Barangay 6",
        city: "Caloocan",
        province: "Metro Manila",
        postalCode: "1400",
        country: "Philippines"
    },
    {
        name: "John Doe",
        email: "john.doe4@example.com",
        joined: "2 months ago",
        mobileNumber: "+63 423 456 7890",
        buildingNumber: "40",
        streetName: "Magsaysay Street",
        barangay: "Barangay 7",
        city: "Pasay",
        province: "Metro Manila",
        postalCode: "1300",
        country: "Philippines"
    },
    {
        name: "Jane Smith",
        email: "jane.smith4@example.com",
        joined: "3 months ago",
        mobileNumber: "+63 654 321 0987",
        buildingNumber: "45D",
        streetName: "Quirino Street",
        barangay: "Barangay 8",
        city: "Paranaque",
        province: "Metro Manila",
        postalCode: "1700",
        country: "Philippines",
        events: "No past events"
    }
];

const members = [
    {
        name: "Church of Christ",
        position: "Admin",
        joined: "1 year ago",
        mobileNumber: "+63 501 234 5678",
        buildingNumber: "100",
        streetName: "Katipunan Avenue",
        barangay: "Barangay Loyola Heights",
        city: "Quezon City",
        province: "Metro Manila",
        postalCode: "1105",
        country: "Philippines",
        events: [
            {
                title: "Annual Charity Gala",
                description: "Join us for our annual charity gala to support local families in need.",
                date: "September 5, 2023",
                image: Church1Event
            },
            {
                title: "Summer Picnic",
                description: "Enjoy a fun-filled day with family and friends at our annual summer picnic.",
                date: "July 20, 2023",
                image: Church1Event
            }
        ]
    },
    {
        name: "Manila Central Church",
        position: "Member",
        joined: "8 months ago",
        mobileNumber: "+63 502 345 6789",
        buildingNumber: "200",
        streetName: "Taft Avenue",
        barangay: "Barangay 13",
        city: "Manila",
        province: "Metro Manila",
        postalCode: "1004",
        country: "Philippines",
        events: [
            {
                title: "Christmas Celebration",
                description: "Join us for a magical Christmas celebration with carols, festive treats, and more.",
                date: "December 10, 2023",
                image: Church1Event
            }
        ]
    },
    {
        name: "Victory",
        position: "Member",
        joined: "8 months ago",
        mobileNumber: "+63 503 456 7890",
        buildingNumber: "300",
        streetName: "Ortigas Avenue",
        barangay: "Barangay San Antonio",
        city: "Pasig",
        province: "Metro Manila",
        postalCode: "1605",
        country: "Philippines",
        events: [
            {
                title: "Annual Charity Gala",
                description: "Join us for our annual charity gala to support local families in need.",
                date: "September 5, 2023",
                image: Church1Event
            },
            {
                title: "Summer Picnic",
                description: "Enjoy a fun-filled day with family and friends at our annual summer picnic.",
                date: "July 20, 2023",
                image: Church1Event
            },
            {
                title: "Christmas Celebration",
                description: "Join us for a magical Christmas celebration with carols, festive treats, and more.",
                date: "December 10, 2023",
                image: Church1Event
            }
        ]
    }
];

export const ChurchContext = React.createContext();

const ChurchProvider = ({ children }) => {
    const [membersState, setMembersState] = useState(members);
    const [applicantsState, setApplicantsState] = useState(applicants);

    return (
        <ChurchContext.Provider value={[membersState, setMembersState, applicantsState, setApplicantsState]}>
            {children}
        </ChurchContext.Provider>
    );
};

export default ChurchProvider;
