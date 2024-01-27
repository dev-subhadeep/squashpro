"use client"

import axios from "axios"
import React, { useContext, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { toast } from "sonner"

type TUser = {
  id: string
  name: string
  email: string
}

const ReportNewBug = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  // const [severity, setSeverity] = useState("")
  const searchParams = useSearchParams()
  const severity = searchParams.get("severity")
  const [source, setSource] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const router = useRouter()

  //Cloudinary
  const preset_key = process.env.CLOUDINARY_UPLOAD_PRESET!
  const cloudname = process.env.CLOUDINARY_NAME!
  const cloudinary_url =
    "https://api.cloudinary.com/v1_1/" + "dziwovj79" + "/image/upload"

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.get("/api/user")
      const user = await response.data
      const data = {
        title,
        description,
        severity,
        source,
        raised_by: user.id,
      }
      const bugRes = await axios.post("/api/bugs", data)
      toast(bugRes.data.message)

      router.push("/tracker")
    } catch (error: any) {
      console.log(error)
    }
  }

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
        setSource(res.data.secure_url)
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsUploading(false))
  }

  return (
    <div className="container flex flex-col justify-center items-center gap-2 h-screen">
      <h1 className="text-2xl">Report New Bug</h1>
      <div className="border border-slate-200 w-[600px] mx-auto p-5 rounded-lg">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <div>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Upload Reference Vide/Image</label>
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
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReportNewBug

{
  /* <div>
      <h1>Report New Bug</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        
        <div>
          <div>
            <button>
              <label htmlFor="source">Upload</label>
            </button>
          </div>
          <input
            type="file"
            id="source"
            disabled={isUploading}
            onChange={handleMediaUpload}
          />
        </div>
        <div>
          <button disabled={isUploading} type="submit">
            Report
          </button>
        </div>
      </form>
      <div>{source && <img src={source} />}</div>
    </div> */
}
