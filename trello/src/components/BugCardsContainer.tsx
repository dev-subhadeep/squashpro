import React, { ReactNode } from "react"
import { Droppable } from "react-beautiful-dnd"
import ReportBugButton from "./ReportBugButton"

type Prop = {
  variant: string
  children: ReactNode
}

const BugCardsContainer = ({ variant, children }: Prop) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <ReportBugButton severity={variant} />
      </div>
      <div
        className={
          variant === "Critical"
            ? "bg-red-700 p-2 mb-2 text-white w-[300px] rounded-t-lg"
            : variant === "Major"
            ? "bg-yellow-500 p-2 mb-2 text-white w-[300px] rounded-t-lg"
            : variant === "Medium"
            ? "bg-blue-600 p-2 mb-2 text-white w-[300px] rounded-t-lg"
            : "bg-green-700 p-2 mb-2 text-white w-[300px] rounded-t-lg"
        }
      >
        <h1> {variant} Severity </h1>
      </div>
      <div
        className={
          variant === "Critical"
            ? "min-h-[100px] border border-red-500"
            : variant === "Major"
            ? "min-h-[100px] border border-yellow-300"
            : variant === "Medium"
            ? "min-h-[100px] border border-blue-400"
            : "min-h-[100px] border border-green-400"
        }
      >
        {children}
      </div>
    </div>
  )
}

export default BugCardsContainer
