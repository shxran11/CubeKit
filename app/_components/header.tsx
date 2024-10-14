import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "./ToggleThemeButton";

const Header = () => {
  return (
    <div className="flex justify-between shadow-md m-2">
      <Image
        src={"/logo-full.png"}
        alt="Logo"
        width={150}
        height={100}
        className="ml-2"
      />
      <div className="flex justify-between m-4 gap-2">
        <Button>Get Started</Button>
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Header;
