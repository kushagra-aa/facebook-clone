import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 hover:bg-red-100 rounded-xl active:border-b-2 active:border-red-500 group">
      <Icon
        className={`h-5 ${
          active ? "text-red-500" : "text-gray-500"
        } text-center sm:h-7 mx-auto group-hover:text-red-500`}
      />
    </div>
  );
};

export default HeaderIcon;
