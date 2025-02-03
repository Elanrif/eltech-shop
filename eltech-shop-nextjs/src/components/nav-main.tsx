"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import {usePathname} from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu Principale</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isChildActive = item.items?.some((subItem) => pathname === subItem.url)
          return (<Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                    tooltip={item.title}
                    className={`${ ((pathname === item.url) || isChildActive) && 'text-shop-secondary'}`}

                >
                  {item.icon && <item.icon />}
                  <Link href={item.url}><span>{item.title}</span></Link>
                  {item.items && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items?.map((subItem) => (
                  <CollapsibleContent key={subItem.title}>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span className={`${pathname === subItem.url && "text-shop-secondary"}`}>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
              ))}
            </SidebarMenuItem>
          </Collapsible>)
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
