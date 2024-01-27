import axios from "axios"
import { createContext, useState, ReactNode, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type Message = {
  _id: string
  conversationId: string
  text: string
  createdAt: string
  updatedAt: string
}

type Conversation = {
  _id: string
  members: User[]
  createdAt: Date
  updatedAt: Date
}

type ChatContextProps = {
  currentUser: User | null
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
  messages: Message[] | null | undefined
  setCurrentConversationId: React.Dispatch<React.SetStateAction<string>>
  conversations: Conversation[] | null | undefined
  me: User | null | undefined
}

export const ChatContext = createContext<ChatContextProps | undefined | null>(
  undefined
)

type ChatProviderProps = {
  children: ReactNode
}

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [me, setMe] = useState<User | null>()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<Message[] | null | undefined>(null)
  const [currentConversationId, setCurrentConversationId] = useState<string>(
    "65b47c4401dca3368decae71"
  )
  const [conversations, setConversations] = useState<Conversation[] | null>()

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => setMe(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`/api/conversation/${me?.id}`)
      .then((res) => setConversations(res.data))
      .catch((err) => console.log(err))
  }, [me])

  useEffect(() => {
    if (currentConversationId) {
      axios
        .get(`/api/message/${currentConversationId}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.log(err))
    }
  }, [currentConversationId])

  const contextValue: ChatContextProps = {
    currentUser,
    setCurrentUser,
    messages,
    setCurrentConversationId,
    conversations,
    me,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export default ChatProvider
