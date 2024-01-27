import axios from "axios"
import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import SampleImage from "../../public/sample/rachael.jpg"
import { ChatContext } from "@/context/ChatContext"

const ConversationCard = ({ conversation }: { conversation: any }) => {
  const { me, setCurrentUser } = useContext(ChatContext)
  const friendId = conversation.members.find((member) => member._id !== me.id)
  const [friend, setFriend] = useState()

  useEffect(() => {
    axios
      .get(`/api/user/${friendId}`)
      .then((res) => setFriend(res.data))
      .catch((err) => console.log(err))
  }, [me])

  return (
    <div
      className={"flex flex-row gap-4 rounded-2xl p-4 hover:bg-slate-100"}
      onClick={() => setCurrentUser(friendId)}
    >
      <div>
        {friend?.avatar ? (
          <Image
            src={friend.avatar}
            alt={friend.name}
            height={48}
            width={48}
            className="rounded-full"
          />
        ) : (
          <Image
            src={SampleImage}
            alt="No avatar"
            height={48}
            width={48}
            className="rounded-full"
          />
        )}
      </div>
      <div>
        <h1 className="font-bold">{friend?.name}</h1>
      </div>
      <div>
        <p className="text-slate-400 font-bold">12 min</p>
      </div>
    </div>
  )
}

export default ConversationCard

{
  /* <div
      className={"flex flex-row gap-4 rounded-2xl p-4 hover:bg-slate-100" + css}
      onClick={() => console.log("clicked")}
    >
      <div>
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            height={48}
            width={48}
            className="rounded-full"
          />
        ) : (
          <Image
            src={SampleImage}
            alt="No avatar"
            height={48}
            width={48}
            className="rounded-full"
          />
        )}
      </div>
      <div>
        <h1 className="font-bold">{user?.name}</h1>
      </div>
      <div>
        <p className="text-slate-400 font-bold">12 min</p>
      </div>
    </div> */
}
