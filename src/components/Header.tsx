import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import IconLink from "./IconLink";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Hand,
  Info,
  Binoculars,
  Key,
  Tree,
} from "@phosphor-icons/react";

// Apply multiple CSS classes using CSS Modules
// const buttonClasses = `${styles.button} ${primary ? styles.primary : ""} ${
//   large ? styles.large : ""
// }`;

const Header = () => (
  <Navbar
    maxWidth="full"
    position="sticky"
    height="auto"
    isBordered
    classNames={{
      item: ["activeIconLinkNav"],
    }}
  >
    <NavbarContent
      className="hidden sm:flex basis-1/5 sm:basis-full"
      style={{ paddingTop: "16px", paddingBottom: "16px", paddingLeft: "32px" }}
      justify="start"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Clean & Green Philly Logo"
            width={112}
            height={67}
          />
        </Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent
      className="hidden sm:flex basis-1/5 sm:basis-full"
      justify="end"
    >
      <IconLink
        icon={<Binoculars className="h-6 w-6" />}
        text="Find Properties"
        href="/map"
      />
      <IconLink
        icon={<Key className="h-6 w-6" />}
        text="Get Access"
        href="/get-access"
      />
      <IconLink
        icon={<Tree className="h-6 w-6" />}
        text="Transform"
        href="/transform-property"
      />
      <IconLink
        icon={<Info className="h-6 w-6" />}
        text="About"
        href="/about"
      />
    </NavbarContent>
  </Navbar>
);

export default Header;
