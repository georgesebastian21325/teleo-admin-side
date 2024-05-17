import React, { useState } from 'react';

const applicants = [
    { name: "George Sebastian", email: "george@example.com", joined: "2 months ago", mobileNumber: "+63 918 343 2375", birthday: "11/23/2002", buildingNo:"Benedorm Unit 517", 
    streetName:"Gelinos Street", barangay:"Barangay 475", city:" Manila ", province:"Manila", postalCode:"2100", country:"Philippines"},
    
    { name: "Erica Moulic", email: "erica@example.com", joined: "3 months ago", mobileNumber: "+63 920 120 3108", birthday: "10/26/2002", buildingNo:"North Forbes Unit 1031", 
    streetName:"Padre Noval Street", barangay:"Barangay 475", city:"Makati", province:"Bais", postalCode:"2101", country:"Philippines" },
    
    { name: "Ralph Lingating", email: "ralph@example.com", joined: "4 months ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Lacson Avenue", barangay:"Barangay 506", city:"Taguig", province:"Isabela", postalCode:"2100", country:"Philippines" },
    
    { name: "Stefano Sumulong", email: "stefano@example.com", joined: "5 months ago", mobileNumber: "+63 918 343 2375", birthday: "11/23/2002", buildingNo:"Benedorm Unit 517", 
    streetName:"Cayco Street", barangay:"Barangay 230", city:"Pasig", province:"Talisay", postalCode:"2100", country:"Philippines" },
    
    { name: "Kyla Evangelista", email: "kyla@example.com", joined: "1 month ago", mobileNumber: "+63 920 120 3108", birthday: "10/26/2002", buildingNo:"North Forbes Unit 1031", 
    streetName:"Dapitan", barangay:"Barangay 120", city:"Pasay", province:"Vigan", postalCode:"2101", country:"Philippines" },
    
    { name: "Robin Vardeleon", email: "robin@example.com", joined: "2 weeks ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Vicente Cruz", barangay:"Barangay 201", city:"Antipolo", province:"Pangasinan", postalCode:"2100", country:"Philippines" }
];

const members = [
    { name: "Rhianna Corpuz", position: "Admin", joined: "1 year ago", mobileNumber: "+63 918 343 2375", birthday: "11/23/2002", buildingNo:"Benedorm Unit 517", 
    streetName:"Cayco Street", barangay:"Barangay 230", city:"Caloocan", province:"Bacoor", postalCode:"2100", country:"Philippines"  },
    
    { name: "AL J Sanchez", position: "Member", joined: "8 months ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Vicente Cruz", barangay:"Barangay 201", city:"Mandaluyong", province:"Lucena", postalCode:"2100", country:"Philippines"  },

    { name: "Hermino Cayco", position: "Member", joined: "5 months ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Lacson Avenue", barangay:"Barangay 506", city:"Baguio", province:"Calamba", postalCode:"2100", country:"Philippines" },

    { name: "Rhianna Corpuz", position: "Admin", joined: "1 year ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Vicente Cruz", barangay:"Barangay 201", city:"Tarlac", province:"Angeles", postalCode:"2100", country:"Philippines"  },

    { name: "AL J Sanchez", position: "Member", joined: "8 months ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Lacson Avenue", barangay:"Barangay 506", city:"Pampanga", province:"San Pedro", postalCode:"2100", country:"Philippines" },

    { name: "Hermino Cayco", position: "Member", joined: "5 months ago", mobileNumber: "+63 911 099 2121", birthday: "03/12/2001", buildingNo:"UTower 2", 
    streetName:"Vicente Cruz", barangay:"Barangay 201", city:"Quezon", province:"Batac", postalCode:"2100", country:"Philippines"  }
];

export const MemberContext = React.createContext();

const MemberProvider = ({ children }) => {
    const [membersState, setMembersState] = useState(members);
    const [applicantsState, setApplicantsState] = useState(applicants);

    return (
        <MemberContext.Provider value={[membersState, setMembersState, applicantsState, setApplicantsState]}>
            {children}
        </MemberContext.Provider>
    );
};

export default MemberProvider;
