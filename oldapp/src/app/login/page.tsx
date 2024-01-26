"use client"

import React, { useState } from "react"

const initialState = {
  email: "",
  password: "",
}

const LoginPage = () => {
  const [user, setUser] = useState(initialState)

  const signup = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(user)
    setUser(initialState)
  }

  return (
    <div className="container mx-auto">
      <h1>Login</h1>
      <div>
        <form className="flex flex-col gap-4" onSubmit={signup}>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              className="text-black"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              className="text-black"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="border rounded border-white px-6 py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
