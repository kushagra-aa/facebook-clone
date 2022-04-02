import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top=0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* LEFT */}
      <div className="flex items-center">
        {/* logo */}
        <Image
          alt="my social"
          src="https://links.papareact.com/5me"
          width="40"
          height="40"
          layout="fixed"
        />
        {/* search form */}
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent  outline-none placeholder-gray-500"
            type="text"
            // value=""
            placeholder="Search Social.."
          />
        </div>
      </div>
      {/* CENTER */}
      <div className="flex flex-grow justify-center items-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="cursor-pointer"
          src={session.user.image}
          width="50%"
          height="50%"
          alt="user image"
        />
        <p className="font-semibold pr-3 whitespace-nowrap">
          {session.user.name}
        </p>
        <ViewGridIcon className="header-r-icon" />
        <ChatIcon className="header-r-icon" />
        <BellIcon className="header-r-icon" />
        <ChevronDownIcon className="header-r-icon" />
      </div>
    </header>
  );
};

export default Header;
