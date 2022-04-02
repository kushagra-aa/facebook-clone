import Image from "next/image";
import React from "react";

const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer select-none">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          alt="user"
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-red-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
