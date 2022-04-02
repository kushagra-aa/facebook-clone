import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center gap-5">
      <Image
        alt="my social"
        src="https://links.papareact.com/5me"
        width="400"
        height="400"
        objectFit="contain"
      />
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
