// components/UserCards.tsx
import React from "react";
import ReactStars from "react-stars";

interface UserCardsProps {
  imageSrc: string;
  userName: string;
  hoursWorked: number;
}

const UserCards: React.FC<UserCardsProps> = ({
  imageSrc,
  userName,
  hoursWorked,
}) => {
  return (
    <div className="flex items-center p-6 bg-white shadow rounded-xl my-4 mx-2 justify-between hover:shadow-2xl">
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
      <div className="flex-col  text-left mx-5 w-2/3">
        <div className="">Comment </div>

        <p className="text-gray-600 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          quibusdam qui sapiente possimus laudantium. Cumque maxime tempore
          ratione sapiente nulla dolore, eum aspernatur harum esse, nostrum,
          voluptate ullam voluptates nesciunt!{hoursWorked}
        </p>
      </div>
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        edit={false}
        value={2}
      />
    </div>
  );
};

export default UserCards;
