"use client"

import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Link from "next/link"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post(`/api/login`, { email, password })
      .then((response) => {
        toast(response.data.message)
        router.push("/tracker")
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="container flex flex-col justify-center items-center gap-2 h-screen">
      <h1 className="text-2xl">Log In</h1>
      <div className="border border-slate-200 w-[600px] mx-auto p-5 rounded-lg">
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <Input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-2">
            <Button className="bg-[#615EF0]" type="submit">
              Login
            </Button>{" "}
            &nbsp; Don't have an account?{" "}
            <Link href="/auth/register" className="text-[#615EF0]">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
