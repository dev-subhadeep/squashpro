"use client"

import React from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

const LogoutButton = () => {
  const router = useRouter()
  const handleLogout = () => {
    axios.get("/api/logout").then((res) => router.push("/"))
  }
  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default LogoutButton
