import React, { useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/user/profile');
      const data = await response.json();
      setProfile(data.user);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    // Missing implementation for updating profile
    alert('Update feature is not implemented yet.');
  };

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (!profile) {
    return <div className={styles.error}>Profile not found.</div>;
  }

  return (
    <div className={styles.profilePage}>
      <img src={profile.avatarUrl} alt="User Avatar" />
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <button onClick={handleUpdate}>Update Profile</button>
      {/* Missing proper form for profile updates */}
    </div>
  );
};

export default ProfilePage;
