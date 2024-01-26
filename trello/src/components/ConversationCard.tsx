import Image, { StaticImageData } from "next/image"
import React from "react"

type ConvoCard = {
  image: string | StaticImageData
  name: string
  time: string
  message: string
  active?: boolean
}

const ConversationCard = ({
  image,
  name,
  time,
  message,
  active,
}: ConvoCard) => {
  const css = active === true ? " bg-slate-100" : ""
  return (
    <div className={"flex flex-row gap-4 rounded-2xl p-4" + css}>
      <div>
        <Image
          src={image}
          alt="name"
          height={48}
          width={48}
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p className="text-slate-400 text-sm">{message.slice(0, 20)}</p>
      </div>
      <div>
        <p className="text-slate-400 font-bold">{time}</p>
      </div>
    </div>
  )
}

export default ConversationCard
