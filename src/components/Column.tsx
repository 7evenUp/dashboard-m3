import React from "react"
import {
  BellNotification,
  Calendar,
  CheckCircle,
  Link,
  MoreVert,
  Plus,
} from "iconoir-react"

import Title from "@/shared/typography/Title"

import Button from "@/shared/ui/Button"
import Card from "@/shared/ui/Card"
import Label from "@/shared/typography/Label"
import Body from "@/shared/typography/Body"
import IconButton from "@/shared/ui/IconButton"
import Image, { StaticImageData } from "next/image"

const Column = ({
  title,
  totalCards,
  avatar,
  name,
  lastSeen,
  cardChecks,
  cardContent,
  cardDate,
  cardLinks,
  cardName,
  cardNotifications,
}: {
  title: string
  totalCards: number
  avatar: StaticImageData
  name: string
  lastSeen: string
  cardName: string
  cardContent: string
  cardDate: string
  cardChecks: number
  cardLinks: number
  cardNotifications: number
}) => {
  return (
    <div className="flex flex-col w-[340px] px-4 py-3 rounded-xl bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1">
          <Title
            size="large"
            className="text-light-onSurface dark:text-dark-onSurface"
          >
            {title}
          </Title>
          <span className="w-2 h-2 rounded-full bg-light-tertiary dark:bg-dark-tertiary" />
          <Title
            size="large"
            className="text-light-tertiary dark:text-dark-tertiary"
          >
            ({totalCards})
          </Title>
        </div>
        <Button appearance="outlined" icon={<Plus />}>
          Add
        </Button>
      </header>

      <div className="flex flex-col gap-2">
        <Card appearance="outlined" className="flex flex-col h-[179px]">
          <div className="flex items-center gap-3">
            <Image src={avatar} alt="User avatar" className="rounded-full" quality={100} />
            <div className="flex flex-col">
              <Label
                size="large"
                className="text-light-primary dark:text-dark-primary"
              >
                {name}
              </Label>
              <Body
                size="small"
                className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
              >
                {lastSeen}
              </Body>
            </div>
            <IconButton
              className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant ml-auto"
              appearance="standart"
              icon={<MoreVert />}
            />
          </div>
          <Title className="text-light-onSurface dark:text-dark-onSurface mt-2">
            {cardName}
          </Title>
          <Body className="text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
            {cardContent}
          </Body>
          <div className="flex items-center gap-3 mt-auto text-light-tertiary dark:text-dark-tertiary">
            <div className="flex items-center gap-1 mr-auto">
              <Calendar width={16} height={16} />
              <Label>{cardDate}</Label>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle width={16} height={16} />
              <Label>{cardChecks}</Label>
            </div>
            <div className="flex items-center gap-1">
              <Link width={16} height={16} />
              <Label>{cardLinks}</Label>
            </div>
            <div className="flex items-center gap-1">
              <BellNotification width={16} height={16} />
              <Label>{cardNotifications}</Label>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Column
