// src/components/TestComponent.js
import React from 'react';
import { useMemberContext } from '../contexts/MemberContext';

const TestComponent = () => {
    const { membersState, churchMembersState } = useMemberContext();
    return (
        <div>
            <h1>Test Component</h1>
            <h2>Pending Members: {membersState.length}</h2>
            <h2>Church Members: {churchMembersState.length}</h2>
        </div>
    );
};

export default TestComponent;
