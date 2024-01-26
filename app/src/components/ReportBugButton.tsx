import React from "react"
import { useRouter } from "next/navigation"

type TProp = {
  severity: string
}

const ReportBugButton = ({ severity }: TProp) => {
  const router = useRouter()

  return (
    <button
      className="bg-purple-500 rounded px-4 py-2 text-white"
      onClick={() => router.push(`/tracker/report-bug?severity=${severity}`)}
    >
      Report Bug
    </button>
  )
}

export default ReportBugButton
