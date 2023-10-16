import { Plus } from "iconoir-react"

import Headline from "@/shared/typography/Headline"

import Button from "@/shared/ui/Button"
import Column from "@/components/Column"
import Toolbar from "@/components/Toolbar"

import UserAvatar2 from "../../public/people/avatar-2.png"
import UserAvatar3 from "../../public/people/avatar-3.png"
import UserAvatar4 from "../../public/people/avatar-4.png"

export default function Home() {
  return (
    <div className="flex flex-col pt-10 px-10">
      <div className="flex justify-between items-center">
        <Headline
          size="large"
          className="text-onSurface"
        >
          Projects
        </Headline>
        <Button appearance="filled" icon={<Plus />}>
          Add project
        </Button>
      </div>
      <Toolbar className="my-6" />
      <div className="flex items-start gap-4">
        <Column
          title="Project Brief"
          totalCards={1}
          avatar={UserAvatar2}
          name="Dianne Russe"
          lastSeen="Yesterday"
          cardName="C++ Software Content creatio... "
          cardContent="Refactor implementation of ProductDTO component. Create new abstract meth..."
          cardDate="Tue, 25 Jul"
          cardChecks={3}
          cardLinks={7}
          cardNotifications={4}
        />
        <Column
          title="Planning"
          totalCards={1}
          avatar={UserAvatar3}
          name="Kristin Watson"
          lastSeen="5 hour ago"
          cardName="New User Flow for mobile"
          cardContent="Create new user flow diagram for mobile application"
          cardDate="Sat, 29 Jul"
          cardChecks={6}
          cardLinks={2}
          cardNotifications={1}
        />
        <Column
          title="Delivery"
          totalCards={1}
          avatar={UserAvatar4}
          name="Leslie Alexander"
          lastSeen="20 min ago"
          cardName="Kubernetes & Docker"
          cardContent="Split app services into docker images and handle it with kubernetes. It shoul..."
          cardDate="Wed, 26 Jul"
          cardChecks={2}
          cardLinks={11}
          cardNotifications={6}
        />
      </div>
    </div>
  )
}
