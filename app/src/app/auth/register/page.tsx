"use client"

import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Link from "next/link"

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const cloudinary_url =
    "https://api.cloudinary.com/v1_1/" + "dziwovj79" + "/image/upload"

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || ""
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "dfouv8ug")
    setIsUploading(true)
    axios
      .post(cloudinary_url, formData)
      .then((res) => {
        console.log(res.data.secure_url)
        setAvatar(res.data.secure_url)
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsUploading(false))
  }

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post("/api/register", { name, email, password, avatar })
      .then((response) => {
        toast(response.data.message)
        router.push("/auth/login")
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="container flex flex-col justify-center items-center gap-2 h-screen">
      <h1 className="text-2xl">Sign Up</h1>
      <div className="border border-slate-200 w-[600px] mx-auto p-5 rounded-lg">
        <form onSubmit={handleRegistration} className="flex flex-col gap-2">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <Input
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
          <div>
            <label htmlFor="">Upload Avatar</label>
          </div>
          <div>
            <Input type="file" onChange={handleMediaUpload} />
          </div>
          <div className="my-2">
            <Button
              className="bg-[#615EF0]"
              disabled={isUploading}
              type="submit"
            >
              Register
            </Button>{" "}
            &nbsp; Already have an account?{" "}
            <Link href="/auth/login" className="text-[#615EF0]">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
