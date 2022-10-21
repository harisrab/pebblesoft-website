import Link from "next/link";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Originating = () => {
  return (
    <div className="text-[#fff] font-alliance flex justify-center flex-col">
      <p className="opacity-60 pl-1">Originating from</p>
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_rg0LWh4nld.json"
            className="player"
            loop
            autoplay
          />
        </div>
        <Link href="https://goo.gl/maps/5tKzppXgygzHiBzG6">
          <p className="underline underline-offset-4 hover:opacity-80 duration-200 hover:cursor-pointer">
            Island of Hong Kong
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Originating;
