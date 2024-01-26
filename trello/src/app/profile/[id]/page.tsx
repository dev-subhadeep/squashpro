import LogoutButton from "@/components/LogoutButton"
import React from "react"

interface Props {
  params: {
    id: string
  }
}

const ProfilePage = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.id}</h1>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
}

export default ProfilePage
