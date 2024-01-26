import React from "react"

type TBug = {
  _id: string
  title: string
  severity: string
}

const BugCard = ({ title, severity }: TBug) => {
  return (
    <div
      className={
        severity === "Critical"
          ? "bg-red-700 p-2 mb-2 text-white w-[300px]"
          : severity === "Major"
          ? "bg-yellow-500 p-2 mb-2 text-white w-[300px]"
          : severity === "Medium"
          ? "bg-blue-600 p-2 mb-2 text-white w-[300px]"
          : "bg-green-700 p-2 mb-2 text-white w-[300px]"
      }
    >
      <p>{title}</p>
      <p>{severity}</p>
    </div>
  )
}

export default BugCard
