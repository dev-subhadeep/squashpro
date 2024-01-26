"use client"

import axios from "axios"
import React, { useContext, useState } from "react"

type TUser = {
  id: string
  name: string
  email: string
}

const ReportNewBug = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState("")
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.get("/api/user")
      const user = await response.data
      const data = {
        title,
        description,
        severity,
        raised_by: user.id,
      }
      console.log(data)
    } catch (error: any) {
      console.log(error.message)
    }
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
        <label htmlFor="severity">Choose Severity</label>
        <select
          value={severity}
          id="severity"
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="Critical">Critical</option>
          <option value="Major">Major</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <div>
          <button type="submit">Report</button>
        </div>
      </form>
    </div>
  )
}

export default ReportNewBug
