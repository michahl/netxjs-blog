import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ModeToggle } from "./modetoggle"

import { Icons } from "./icons"

export default function Menu() {
    return (
        <div className="flex justify-center">
          <div className="fixed bottom-5">

            <Menubar className="">
                <MenubarMenu>
                    <MenubarTrigger className="flex items-center justify-center w-10 h-10">
                        <Icons.home className="w-5 h-5" />
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Icons.about className="w-5 h-5" />
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <ModeToggle />
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>


          </div>
        </div>
    )
}