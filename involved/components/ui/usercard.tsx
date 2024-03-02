// components/UserCards.tsx
import React from 'react';

interface UserCardsProps {
 imageSrc: string;
 userName: string;
 hoursWorked: number;
}

const UserCards: React.FC<UserCardsProps> = ({ imageSrc, userName, hoursWorked }) => {
 return (
    <div className="flex items-center p-6 bg-white shadow rounded-lg my-4 mx-2">
      <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt="User avatar" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">{userName}</h2>
        <p className="text-gray-600">Hours worked: {hoursWorked}</p>
      </div>
    </div>
 );
};

export default UserCards;
