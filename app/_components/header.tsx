import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "./ToggleThemeButton";

const Header = () => {
  return (
    <div className="flex justify-between shadow-md">
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={180}
        height={150}
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
