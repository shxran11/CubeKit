"use client";

import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiGlobeAlt } from "react-icons/hi2";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiGlobeAlt />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <MdOutlineTipsAndUpdates />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlineLogout />,
      path: "/dashboard/logout",
    },
  ];
  const path = usePathname();
  return (
    <div className="fixed h-full p-2 md:w-64 shadow-md border-r">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={180}
        height={140}
        className="ml-5"
      />
      <hr className="my-2" />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`flex items-center gap-2 cursor-pointer hover:bg-violet-400 hover:text-black rounded-lg p-2 m-2 ${
                item.path == path && "bg-violet-400 text-black"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2 className="text-xl">{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-10 w-[90%]">
        <Progress value={33} />
        <p className="text-sm my-2">2 out of 5 courses generated</p>
        <p className="text-xs text-gray-600">
          Upgrade your plan for unlimited course generation.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
