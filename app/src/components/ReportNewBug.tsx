"use client"

import axios from "axios"
import React, { useContext, useState } from "react"
import { useSearchParams } from "next/navigation"

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
      const postBugReportResponse = await axios.post("/api/bugs", data)
      console.log(postBugReportResponse)
      setTitle("")
      setDescription("")
      // setSeverity("")
      setSource("")
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
    <div>
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

        {/* <select
          value={severity}
          id="severity"
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="">Choose Severity</option>
          <option value="Critical">Critical</option>
          <option value="Major">Major</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select> */}
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
    </div>
  )
}

export default ReportNewBug
