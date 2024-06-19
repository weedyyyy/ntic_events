import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";


const MobileNav = () => {
  return (
   <nav className="md:hidden">
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image src="/assets/icons/menu.svg" alt="menu" height={24} width={24} className="cursor-pointer"></Image>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-white md:hidden">
           <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
           <Separator />
            <NavItems/>
        </SheetContent>
        </Sheet>

   </nav>
  );
}

export default MobileNav;
