import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser } from "lucide-react";
import Link from "next/link";

export function MenuUser() {
  return (
    <Menubar className="w-10 h-10">
      <MenubarMenu>
        <MenubarTrigger>
          <CircleUser />
        </MenubarTrigger>
        <MenubarContent>
          <Link href={`/sign-in-up`}>
            <MenubarItem>
              Se connecter <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>Autre options</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <span className="text-red-500">Déconnexion</span>
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
