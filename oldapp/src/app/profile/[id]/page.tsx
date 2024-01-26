import React from "react"

interface Props {
  params: {
    id: String
  }
}

const ProfilePage = ({ params }: Props) => {
  return <div>ProfilePage: {params.id}</div>
}

export default ProfilePage
