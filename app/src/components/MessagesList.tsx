import React, { useEffect, useState } from "react"
import DropDownIcon from "./icons/DropDownIcon"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import AddIcon from "./icons/AddIcon"
import ConversationCard from "./ConversationCard"

import axios from "axios"

type Conversation = {
  _id: string
  members?: [string]
}

const sampleMessage =
  "is an explicit flag that tells the server that this route is being handled by an external resolver like express or connect. Enabling this option disables warnings for unresolved requests."

const MessagesList = () => {
  const [conversations, setConversations] = useState<Conversation[]>()
  const [receiver, setReceiver] = useState<string | null>()
  const [sender, setSender] = useState<string | null>()

  useEffect(() => {
    axios.get("/api/user").then((res) => setSender(res.data.id))
  }, [])

  useEffect(() => {
    axios
      .get(`/api/conversation/${sender}`)
      .then((res) => setConversations(res.data))
  }, [sender])

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
            key={conversation._id}
            id={conversation.members!.filter((member) => member !== sender)[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default MessagesList
