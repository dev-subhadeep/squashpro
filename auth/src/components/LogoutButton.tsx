"use client"

import React from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const LogoutButton = () => {
  const router = useRouter()
  const handleLogout = () => {
    axios.get("/api/logout").then((res) => router.push("/"))
  }
  return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton
