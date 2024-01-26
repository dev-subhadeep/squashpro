"use client"

import React, { useEffect, useState } from "react"
import axios from "axios"

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => setUser({ ...res.data }))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div>
      <h1>Profile Details</h1>
      <div>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}

export default Profile
