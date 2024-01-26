import { createContext, useState, ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
}

type ChatContextProps = {
  currentUser: User | null
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined
)

type ChatProviderProps = {
  children: ReactNode
}

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const contextValue: ChatContextProps = {
    currentUser,
    setCurrentUser,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export default ChatProvider
