import React, { useState, useEffect } from "react"
import axios from "axios"
import BugCardsContainer from "./BugCardsContainer"
import BugCard from "./BugCard"
import { DragDropContext } from "react-beautiful-dnd"

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
  const [isLoading, setIsloading] = useState(false)
  const [criticalBugs, setCriticalBugs] = useState<[TBug]>()
  const [majorBugs, setMajorBugs] = useState<[TBug]>()
  const [mediumBugs, setMediumBugs] = useState<[TBug]>()
  const [lowBugs, setLowBugs] = useState<[TBug]>()
  useEffect(() => {
    axios.get("/api/bugs").then((res) => {
      setCriticalBugs(
        res.data.filter((bug: TBug) => bug.severity === "Critical")
      )
      setMajorBugs(res.data.filter((bug: TBug) => bug.severity === "Major"))
      setMediumBugs(res.data.filter((bug: TBug) => bug.severity === "Medium"))
      setLowBugs(res.data.filter((bug: TBug) => bug.severity === "Low"))
    })
  }, [])
  return (
    <div className="flex flex-row gap-4 justify-center">
      <DragDropContext onDragEnd={() => {}}>
        <div>
          <BugCardsContainer variant="Critical">
            {criticalBugs?.map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
          </BugCardsContainer>
        </div>

        <div>
          <BugCardsContainer variant="Major">
            {majorBugs?.map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
          </BugCardsContainer>
        </div>

        <div>
          <BugCardsContainer variant="Medium">
            {mediumBugs?.map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
          </BugCardsContainer>
        </div>
        <div>
          <BugCardsContainer variant="Low">
            {lowBugs?.map((bug) => (
              <BugCard key={bug._id} {...bug} />
            ))}
          </BugCardsContainer>
        </div>
      </DragDropContext>
    </div>
  )
}

export default BugTracker
