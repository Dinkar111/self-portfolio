import Link from "next/link";
import { MaxWidthWrapper } from "../wrapper";
import { NavBarItemType } from "./navBarItems";
import { ModeToggle } from "../modeToggle";

const navItems: NavBarItemType[] = [
  {
    name: "About Me",
    link: "",
  },
  {
    name: "Projects",
    link: "",
  },
];

export const NavBar = () => {
  return (
    <nav className="sticky z-[100] h-18 inset-x-0 mt-2 mb-2 w-full bg-background/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-18 p-2 items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold">
            <span className="text-primary">Dinku</span>
          </Link>
          <div className="h-full flex items-center space-x-10">
            {navItems.map((item, key) => (
              <Link
                href={item.link}
                className="hover:text-primary hover:border-b hover:border-primary transition-all"
                key={key}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
