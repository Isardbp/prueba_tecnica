"use client";
import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import { fetchUserData } from '../../utils/api';
import { UserData } from '../../types';

const UserProfilePage = () => {
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
      const getUserData = async () => {
        try {
          const userData: UserData = await fetchUserData();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      getUserData();
    }, []);

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;