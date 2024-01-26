import React, { useState, useEffect } from "react"
import axios from "axios"
import BugCardsContainer from "./BugCardsContainer"
import BugCard from "./BugCard"

type TBug = {
  _id: string
  title: string
  description: string
  severity: string
  raised_by: string
  createdAt: string
  updatedAt: string
}

const BugTracker = () => {
  const [bugs, setBugs] = useState<[TBug]>()
  useEffect(() => {
    axios.get("/api/bugs").then((res) => {
      setBugs(res.data)
    })
  }, [])
  return (
    <div className="flex flex-row gap-4 justify-center">
      <div>
        <h1>Critical Severity</h1>
        <BugCardsContainer variant="Critical">
          {bugs
            ?.filter((bug) => bug.severity === "Critical")
            .map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
        </BugCardsContainer>
      </div>

      <div>
        <h1>Major Severity</h1>
        <BugCardsContainer variant="Major">
          {bugs
            ?.filter((bug) => bug.severity === "Major")
            .map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
        </BugCardsContainer>
      </div>

      <div>
        <h1>Medium Severity</h1>
        <BugCardsContainer variant="Medium">
          {bugs
            ?.filter((bug) => bug.severity === "Medium")
            .map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
        </BugCardsContainer>
      </div>
      <div>
        <h1>Low Severity</h1>
        <BugCardsContainer variant="Low">
          {bugs
            ?.filter((bug) => bug.severity === "Low")
            .map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
        </BugCardsContainer>
      </div>
    </div>
  )
}

export default BugTracker
