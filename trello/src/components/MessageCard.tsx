import React from "react"
import SampleImage from "../../public/sample/rachael.jpg"
import Image from "next/image"

const MessageCard = () => {
  return (
    <div className="flex flex-row gap-4">
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
        <p className="bg-gray-100 rounded-lg p-4 max-w-[200px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, odio.
        </p>
      </div>
    </div>
  )
}

export default MessageCard
