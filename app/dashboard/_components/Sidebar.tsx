"use client";

import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { HiGlobeAlt } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline aria-hidden="true" />,
      path: "/dashboard",
      ariaLabel: "Go to home",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiGlobeAlt aria-hidden="true" />,
      path: "/dashboard/explore",
      ariaLabel: "Explore courses",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <MdOutlineTipsAndUpdates aria-hidden="true" />,
      path: "/dashboard/upgrade",
      ariaLabel: "Upgrade your plan",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlineLogout aria-hidden="true" />,
      path: "/dashboard/logout",
      ariaLabel: "Logout",
    },
  ];

  const path = usePathname();
  const { userCourseList } = useContext(UserCourseListContext);
  const length = userCourseList?.length;

  return (
    <div className="fixed h-full md:w-64 shadow-md border-r">
      <div className="flex flex-row items-center ml-3 mb-1">
        <svg
          fill="none"
          height="48"
          viewBox="0 0 147 48"
          width="147"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 14.5264v18.9473l17.8947-12.2437v-18.94741z"
            fill="#6938ef"
            opacity=".5"
          />
          <path
            d="m0 33.4737v-18.9474l17.8947 12.2438v18.9474z"
            fill="#1570ef"
            opacity=".5"
          />
          <path
            d="m40 14.5263v18.9474l-17.8947-12.2438v-18.94737z"
            fill="#6938ef"
            opacity=".5"
          />
          <path
            d="m40 33.4737v-18.9474l-17.8947 12.2438v18.9474z"
            fill="#1570ef"
            opacity=".5"
          />
          <g fill="#7C00FE">
            <path d="m50 24.2c0-1.7334.375-3.275 1.125-4.625.75-1.3667 1.7917-2.425 3.125-3.175 1.35-.7667 2.875-1.15 4.575-1.15 2.0833 0 3.8667.55 5.35 1.65s2.475 2.6 2.975 4.5h-4.7c-.35-.7334-.85-1.2917-1.5-1.675-.6333-.3834-1.3583-.575-2.175-.575-1.3167 0-2.3833.4583-3.2 1.375-.8167.9166-1.225 2.1416-1.225 3.675 0 1.5333.4083 2.7583 1.225 3.675.8167.9166 1.8833 1.375 3.2 1.375.8167 0 1.5417-.1917 2.175-.575.65-.3834 1.15-.9417 1.5-1.675h4.7c-.5 1.9-1.4917 3.4-2.975 4.5-1.4833 1.0833-3.2667 1.625-5.35 1.625-1.7 0-3.225-.375-4.575-1.125-1.3333-.7667-2.375-1.825-3.125-3.175s-1.125-2.8917-1.125-4.625z" />
            <path d="m83.043 19.05v13.95h-4.275v-1.9c-.4334.6166-1.025 1.1166-1.775 1.5-.7334.3666-1.55.55-2.45.55-1.0667 0-2.0084-.2334-2.825-.7-.8167-.4834-1.45-1.175-1.9-2.075s-.675-1.9584-.675-3.175v-8.15h4.25v7.575c0 .9333.2416 1.6583.725 2.175.4833.5166 1.1333.775 1.95.775.8333 0 1.4916-.2584 1.975-.775.4833-.5167.725-1.2417.725-2.175v-7.575z" />
            <path d="m89.8887 21.025c.4-.65.975-1.175 1.725-1.575s1.6083-.6 2.575-.6c1.15 0 2.1916.2916 3.125.875.9333.5833 1.6666 1.4166 2.2 2.5.5503 1.0833.8253 2.3416.8253 3.775 0 1.4333-.275 2.7-.8253 3.8-.5334 1.0833-1.2667 1.925-2.2 2.525-.9334.5833-1.975.875-3.125.875-.9834 0-1.8417-.1917-2.575-.575-.7334-.4-1.3084-.925-1.725-1.575v1.95h-4.275v-18.5h4.275zm6.1 4.975c0-1.0667-.3-1.9-.9-2.5-.5834-.6167-1.3084-.925-2.175-.925-.85 0-1.575.3083-2.175.925-.5834.6166-.875 1.4583-.875 2.525 0 1.0666.2916 1.9083.875 2.525.6.6166 1.325.925 2.175.925s1.575-.3084 2.175-.925c.6-.6334.9-1.4834.9-2.55z" />
            <path d="m115.231 25.8c0 .4-.025.8166-.075 1.25h-9.675c.067.8666.342 1.5333.825 2 .5.45 1.109.675 1.825.675 1.067 0 1.809-.45 2.225-1.35h4.55c-.233.9166-.658 1.7416-1.275 2.475-.6.7333-1.358 1.3083-2.275 1.725-.916.4166-1.941.625-3.075.625-1.366 0-2.583-.2917-3.65-.875-1.066-.5834-1.9-1.4167-2.5-2.5-.6-1.0834-.9-2.35-.9-3.8s.292-2.7167.875-3.8c.6-1.0834 1.434-1.9167 2.5-2.5 1.067-.5834 2.292-.875 3.675-.875 1.35 0 2.55.2833 3.6.85 1.05.5666 1.867 1.375 2.45 2.425.6 1.05.9 2.275.9 3.675zm-4.375-1.125c0-.7334-.25-1.3167-.75-1.75-.5-.4334-1.125-.65-1.875-.65-.716 0-1.325.2083-1.825.625-.483.4166-.783 1.0083-.9 1.775z" />
            <path d="m125.512 33-4.25-5.85v5.85h-4.275v-18.5h4.275v10.225l4.225-5.675h5.275l-5.8 7 5.85 6.95z" />
            <path d="m134.091 17.6c-.75 0-1.367-.2167-1.85-.65-.467-.45-.7-1-.7-1.65 0-.6667.233-1.2167.7-1.65.483-.45 1.1-.675 1.85-.675.733 0 1.333.225 1.8.675.483.4333.725.9833.725 1.65 0 .65-.242 1.2-.725 1.65-.467.4333-1.067.65-1.8.65zm2.125 1.45v13.95h-4.275v-13.95z" />
            <path d="m146.589 29.375v3.625h-2.175c-1.55 0-2.758-.375-3.625-1.125-.867-.7667-1.3-2.0084-1.3-3.725v-5.55h-1.7v-3.55h1.7v-3.4h4.275v3.4h2.8v3.55h-2.8v5.6c0 .4166.1.7166.3.9.2.1833.533.275 1 .275z" />
          </g>
        </svg>
      </div>
      <hr />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`flex items-center gap-2 cursor-pointer hover:bg-violet-400 hover:text-black rounded-lg p-2 m-2 ${
                path.startsWith(item.path) && "bg-violet-400 text-black"
              }`}
              aria-label={item.ariaLabel}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2 className="text-xl">{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className="m-2 absolute bottom-10 w-[90%]">
        <Progress value={(length / 5) * 100} />
        <p className="text-sm my-2">{length} out of 5 courses generated</p>
        <p className="text-xs text-gray-600">
          Upgrade your plan for unlimited course generation.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
