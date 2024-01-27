import React from "react"
import SampleImage from "../../public/sample/rachael.jpg"
import Image from "next/image"

const MessageCard = ({ text, me = true }: { text: string; me: boolean }) => {
  return (
    <div className={"flex gap-4 " + me ? "flex-row-reverse" : "flex-row"}>
      <div>
        <Image
          src={SampleImage}
          alt="sender-profile"
          height={40}
          width={40}
          className="rounded-xl"
        />
      </div>
      <div>
        <p className="bg-gray-100 rounded-lg p-4 max-w-[200px]">{text}</p>
      </div>
    </div>
  )
}

export default MessageCard
