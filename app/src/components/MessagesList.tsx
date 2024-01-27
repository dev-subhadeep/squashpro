// MessagesList.tsx
import React, { useContext, useEffect, useState } from "react"
import DropDownIcon from "./icons/DropDownIcon"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import AddIcon from "./icons/AddIcon"
import ConversationCard from "./ConversationCard"

import axios from "axios"
import { ChatContext } from "@/context/ChatContext"

// type Conversation = {
//   _id: string
//   members?: [string]
// }

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

const MessagesList = () => {
  const { conversations } = useContext(ChatContext)

  return (
    <div className="p-8">
      <div className="flex flex-row justify-center items-center gap-2 my-6 border-b-slate-200">
        <h1 className="text-2xl font-bold">Messages</h1>
        <DropDownIcon />
        <Badge variant="secondary" className="font-bold">
          12
        </Badge>
        <Button variant="ghost">
          <AddIcon />
        </Button>
      </div>
      <div className="flex flex-row justify-center">
        <div id="searchbox">
          <input
            type="text"
            placeholder="search Search messages"
            className="px-[20px] py-[10px] bg-[#f3f3f3] rounded-xl"
          />
        </div>
      </div>
      <div id="conversations" className="flex flex-col gap-3 my-4">
        {conversations?.map((conversation) => (
          <ConversationCard
            conversation={conversation}
            key={conversation._id}
          />
        ))}
      </div>
    </div>
  )
}

export default MessagesList
