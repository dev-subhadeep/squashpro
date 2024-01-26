import ChatQuickMenu from "@/components/ChatQuickMenu"
import CurrentChat from "@/components/CurrentChat"
import MessageDirectory from "@/components/MessageDirectory"
import MessagesList from "@/components/MessagesList"
import React from "react"

const ChatPage = () => {
  return (
    <div className="flex flex-row">
      <ChatQuickMenu />
      <MessagesList />
      <CurrentChat />
      <MessageDirectory />
    </div>
  )
}

export default ChatPage
