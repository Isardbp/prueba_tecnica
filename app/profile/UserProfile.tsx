import React from 'react';
import { UserData } from '../../types';

interface UserDetailsProps {
  user: UserData | null;
}

const UserProfile: React.FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <p className="text-center mt-4">Cargando usuario...</p>;
  }

  return (
    <div className="max-w-md mx-auto shadow-lg p-8 my-8 rounded-lg bg-white">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Perfil de Usuario</h1>
      <div className="mb-4">
        <img src={user.img} alt="Imagen de perfil" className="w-full rounded-lg mb-4" />
        <p className="text-lg text-gray-700"><strong className="text-gray-700">User Name:</strong> {user.userName}</p>
        <p className="text-lg text-gray-700"><strong className="text-gray-700">Mail:</strong> {user.mail}</p>
      </div>
    </div>
  );
};

export default UserProfile;