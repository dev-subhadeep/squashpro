"use client"

import CurrentChat from "@/components/CurrentChat"
import MessageDirectory from "@/components/MessageDirectory"
import MessagesList from "@/components/MessagesList"
import ChatProvider from "@/context/ChatContext"
import React from "react"

const ChatPage = () => {
  return (
    <div className="flex flex-row justify-between">
      <ChatProvider>
        <MessagesList />
        <CurrentChat />
        <MessageDirectory />
      </ChatProvider>
    </div>
  )
}

export default ChatPage
