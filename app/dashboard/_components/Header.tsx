import { ToggleThemeButton } from "@/app/_components/ToggleThemeButton";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="top-0 left-0 w-full z-10 backdrop-blur-md">
      <div className="m-2 shadow-md dark:shadow-gray-900">
        <div className="flex justify-between items-center mb-1 mr-3">
          <div className="flex flex-row items-center ml-3">
            <Link href={"/dashboard"}>
              <svg
                fill="none"
                height="48"
                viewBox="0 0 40 48"
                width="40"
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
              </svg>
            </Link>
          </div>
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
