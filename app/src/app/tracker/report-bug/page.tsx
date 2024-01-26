"use client"
import ReportNewBug from "@/components/ReportNewBug"
import React, { Suspense } from "react"

const ReportBugPage = () => {
  return (
    <div>
      <Suspense>
        <ReportNewBug />
      </Suspense>
    </div>
  )
}

export default ReportBugPage
