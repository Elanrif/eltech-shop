"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {routeEndpoints} from "@/config/route.config";

const {
  endpoints: {
    home,
    dashboard: {
      base,
      orders,
      users,
      categories,
      products,

    }
  }

} = routeEndpoints
// This is sample data.
const data = {
  user: {
    name: "elanrif",
    email: "saidbacoelanrif@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Eltech-shop",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
      href: home
    },
  ],
  navMain: [
    {
      title: "Accueil",
      url: base,
      icon: SquareTerminal,
    },
    {
      title: "Ma boutique",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Commandes",
          url: orders,
        },
        {
          title: "Clients",
          url: users,
        },
        {
          title: "Produits",
          url: products,
        },
        {
          title: "Categories",
          url: categories,
        },
      ],
    },
    {
      title: "Report Analytics",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
