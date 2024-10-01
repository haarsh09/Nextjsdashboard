'use client';

import ProfilePageLayout from "./layout";
import UserProfile from "./userpage";

export default function Page(){
    return (
        <ProfilePageLayout>
            <UserProfile/>
        </ProfilePageLayout>
    );
}