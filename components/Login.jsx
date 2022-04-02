import Image from "next/image";
import { signIn } from "next-auth/react";
import Logo from "./../public/logo.png";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-16">
      <Image
        alt="my social"
        src={Logo}
        width="400"
        height="400"
        objectFit="contain"
      />
      <h1 className="text-2xl capitalize rounded-full text-red-500 text-center">
        welcome to my social
      </h1>
      <h1
        onClick={signIn}
        className="capitalize p-5 bg-red-500 rounded-full text-white text-center cursor-pointer"
      >
        login with facebook
      </h1>
    </div>
  );
};

export default Login;
