"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"

type TBug = {
  _id: string
  title: string
  description: string
  severity: string
  raised_by: string
  createdAt: string
  updatedAt: string
}

const TrackerPage = () => {
  const [bugs, setBugs] = useState<[TBug]>()
  useEffect(() => {
    axios.get("/api/bugs").then((res) => {
      setBugs(res.data)
    })
  }, [])
  return (
    <div>
      <h1>Tracker Page</h1>

      <div>
        {bugs?.map((bug) => (
          <div key={bug._id}>
            <p>{bug.title}</p>
            <p>{bug.severity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackerPage
