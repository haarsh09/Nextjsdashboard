"use client";

import React from 'react';



const ProfilePageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="profile-page-layout">
            <header className="profile-header">
                <h1>User Profile</h1>
            </header>
            <aside className="profile-sidebar">
                <nav>
                    <ul>
                        <li><a href="/profile">Overview</a></li>
                        <li><a href="/profile/settings">Settings</a></li>
                        <li><a href="/profile/activity">Activity</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="profile-content">
                {children}
            </main>
            <style jsx>{`
                .profile-page-layout {
                    display: grid;
                    grid-template-areas: 
                        "header header"
                        "sidebar content";
                    grid-template-rows: auto 1fr;
                    grid-template-columns: 200px 1fr;
                    height: 100vh;
                }
                .profile-header {
                    grid-area: header;
                    background: #f5f5f5;
                    padding: 1rem;
                    text-align: center;
                }
                .profile-sidebar {
                    grid-area: sidebar;
                    background: #e0e0e0;
                    padding: 1rem;
                }
                .profile-content {
                    grid-area: content;
                    padding: 1rem;
                }
            `}</style>
        </div>
    );
};

export default ProfilePageLayout;