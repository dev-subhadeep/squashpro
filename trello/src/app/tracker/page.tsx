"use client"

import BugCard from "@/components/BugCard"
import BugTracker from "@/components/BugTracker"
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
  return <BugTracker />
}

export default TrackerPage
