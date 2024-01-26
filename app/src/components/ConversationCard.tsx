import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import SampleImage from "../../public/sample/rachael.jpg"

type ConvoCard = {
  id: string
  active?: boolean
}

type User = {
  _id: string
  name: string
  avatar?: string
}

const ConversationCard = ({ id, active }: ConvoCard) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    axios
      .get(`/api/user/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
  }, [id])

  const css = active ? " bg-slate-100" : ""

  return (
    <div
      className={"flex flex-row gap-4 rounded-2xl p-4 hover:bg-slate-100" + css}
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
      <div>{/* <p className="text-slate-400 font-bold">12 min</p> */}</div>
    </div>
  )
}

export default ConversationCard
