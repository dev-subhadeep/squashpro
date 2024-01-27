"use client"
import EditBug from "@/components/EditBug"
import React, { Suspense } from "react"

const ReportBugPage = () => {
  return (
    <div>
      <Suspense>
        <EditBug />
      </Suspense>
    </div>
  )
}

export default ReportBugPage
