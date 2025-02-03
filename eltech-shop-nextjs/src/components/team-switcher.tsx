"use client"

import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useRouter} from "next/navigation";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
    href: string
  }[]
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTeam, setActiveTeam] = React.useState(teams[0])
  const route = useRouter();
  const handleClick = () => {
     route.push(activeTeam.href)
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            onClick={handleClick}
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <activeTeam.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
            <span className="truncate text-xs">{activeTeam.plan}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
