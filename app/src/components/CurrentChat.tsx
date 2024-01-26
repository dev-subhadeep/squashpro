import React from "react"
import SampleImage from "../../public/sample/rachael.jpg"
import MessageCard from "./MessageCard"
import OnlineStatusIcon from "./icons/OnlineStatusIcon"
import { Button } from "./ui/button"
import AttachmentIcon from "../../public/icons/attachment-icon.svg"
import SendMessageIcon from "./icons/SendMessageIcon"
import Image from "next/image"

const CurrentChat = () => {
  return (
    <div className="grow">
      <div className="my-10">
        <h1 className="text-xl font-bold">Lara Costa</h1>
        <p className="flex flex-row gap-2 items-center">
          <OnlineStatusIcon />
          <span className="text-xs font-bold text-slate-400">Online</span>
        </p>
      </div>
      <div className="min-h-[60vh]">
        <MessageCard />
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
