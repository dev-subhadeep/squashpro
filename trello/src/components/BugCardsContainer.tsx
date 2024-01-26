import React, { ReactNode } from "react"

type Prop = {
  variant: string
  children: ReactNode
}

const BugCardsContainer = ({ variant, children }: Prop) => {
  return (
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
  )
}

export default BugCardsContainer
