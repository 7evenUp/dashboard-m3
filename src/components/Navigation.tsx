import React from "react"
import {
  HomeSimpleDoor,
  KanbanBoard,
  UserCircle,
  Calendar,
  StatsUpSquare,
  Bell,
  LogOut,
} from "iconoir-react"

import { NavigationRail, NavigationRailItem } from "@/shared/ui/NavigationRail"
import IconButton from "@/shared/ui/IconButton"

const Navigation = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-6">
      <NavigationRail>
        <NavigationRailItem href="" isActive={false} label="Home">
          <HomeSimpleDoor />
        </NavigationRailItem>
        <NavigationRailItem href="" isActive={true} label="Dashboard">
          <KanbanBoard />
        </NavigationRailItem>
        <NavigationRailItem href="" isActive={false} label="Profile">
          <UserCircle />
        </NavigationRailItem>
        <NavigationRailItem href="" isActive={false} label="Calendar">
          <Calendar />
        </NavigationRailItem>
        <NavigationRailItem href="" isActive={false} label="Stats">
          <StatsUpSquare />
        </NavigationRailItem>
        <NavigationRailItem href="" isActive={false} label="Notifications">
          <Bell />
        </NavigationRailItem>
      </NavigationRail>

      <IconButton appearance="standart" icon={<LogOut />} />
    </div>
  )
}

export default Navigation
