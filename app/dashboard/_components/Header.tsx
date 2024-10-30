import { ToggleThemeButton } from "@/app/_components/ToggleThemeButton";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
      <div className="m-2 shadow-md">
        <div className="flex justify-between items-center mb-3 mr-3">
          <Image src={"/logo-half.png"} alt="logo" width={70} height={60} />
          <div className="flex gap-2">
            <ToggleThemeButton />
            <UserButton />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default DashboardHeader;
