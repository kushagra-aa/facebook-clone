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

const Header = () => {
  return (
    <header>
      {/* LEFT */}
      <div className="">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src="https://links.papareact.com/5me" width="40" height="40" />
        <div className="flex ">
          <SearchIcon className="h-6" />
          <input type="text" value="" placeholder="Search Social.." />
        </div>
      </div>
      {/* CENTER */}
      {/* RIGHT */}
    </header>
  );
};

export default Header;
