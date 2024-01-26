import React from "react"
import DropDownIcon from "./icons/DropDownIcon"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import AddIcon from "./icons/AddIcon"
import ConversationCard from "./ConversationCard"
import SampleImage from "../../public/sample/rachael.jpg"

const sampleMessage =
  "is an explicit flag that tells the server that this route is being handled by an external resolver like express or connect. Enabling this option disables warnings for unresolved requests."

const MessagesList = () => {
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
        <ConversationCard
          image={SampleImage}
          name="Rachael Williams"
          time="23m"
          message={sampleMessage}
        />
        <ConversationCard
          image={SampleImage}
          name="Rachael Williams"
          time="23m"
          message={sampleMessage}
        />
        <ConversationCard
          image={SampleImage}
          name="Rachael Williams"
          time="23m"
          message={sampleMessage}
          active={true}
        />
      </div>
    </div>
  )
}

export default MessagesList
