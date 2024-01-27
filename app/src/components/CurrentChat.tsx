// CurrentChat.tsx
import React, { useContext } from "react"
import SampleImage from "../../public/sample/rachael.jpg"
import MessageCard from "./MessageCard"
import OnlineStatusIcon from "./icons/OnlineStatusIcon"
import { Button } from "./ui/button"
import AttachmentIcon from "../../public/icons/attachment-icon.svg"
import SendMessageIcon from "./icons/SendMessageIcon"
import Image from "next/image"
import { ChatContext } from "@/context/ChatContext"

type Message = {
  _id: string
  conversationId: string
  text: string
  createdAt: string
  updatedAt: string
}

const CurrentChat = () => {
  const { messages } = useContext(ChatContext)

  return (
    <div className="grow">
      <div className="my-10">
        <h1 className="text-xl font-bold">Lara Costa</h1>
        <p className="flex flex-row gap-2 items-center">
          <OnlineStatusIcon />
          <span className="text-xs font-bold text-slate-400">Online</span>
        </p>
      </div>
      <div className="min-h-[60vh] flex flex-col gap-3">
        {messages !== null && messages.length > 0 ? (
          messages.map((message: Message) => (
            <MessageCard key={message._id} text={message.text} />
          ))
        ) : (
          <p>No messages yet</p>
        )}
      </div>
      <div id="message-box" className="flex flex-row">
        <Button variant="ghost">
          <Image
            src={AttachmentIcon}
            height={24}
            width={24}
            alt="attach files"
          />
        </Button>
        <div className="flex flex-row border-2 border-slate-300 px-4 py-2 rounded-lg w-9/12">
          <input type="text" className="outline-none w-full" />
          <SendMessageIcon />
        </div>
      </div>
    </div>
  )
}

export default CurrentChat
