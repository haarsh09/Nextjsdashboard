'use client';

import React from 'react';
import ProfilePageLayout from './layout'; // Adjust the import path as necessary

const UserProfile = () => {
    return (
        <ProfilePageLayout>
            <div>
                <h2>Welcome, John Doe!</h2>
                <p>This is your profile page.</p>
                {/* Add more content here */}
            </div>
        </ProfilePageLayout>
    );
};

export default UserProfile;