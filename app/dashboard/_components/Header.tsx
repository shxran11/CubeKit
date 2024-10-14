import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="m-2 shadow-md">
      <div className="flex justify-between items-center my-4">
        <Image src={"/logo-half.png"} alt="logo" width={60} height={50} />
        <UserButton />
      </div>
      <hr />
    </div>
  );
};

export default DashboardHeader;
