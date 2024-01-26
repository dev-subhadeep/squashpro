"use client"

import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post(`/api/login`, { email, password })
      .then((response) => {
        console.log(response.data)
        router.push("/")
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
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
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
