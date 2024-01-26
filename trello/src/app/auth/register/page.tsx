"use client"

import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post("/api/register", { name, email, password })
      .then((response) => {
        router.push("/auth/login")
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
