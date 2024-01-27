import { connect } from "@/utils/db"
import Bug from "@/models/bugModel"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { title, description, severity, source, raised_by } = reqBody
    if (!title) {
      return NextResponse.json(
        { error: "Title must be provided" },
        { status: 400 }
      )
    }
    const bug = await Bug.create({
      title,
      description,
      severity,
      source,
      raised_by,
    })
    return NextResponse.json({ message: "Bug reported!", bug }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const bugs = await Bug.find()
    return NextResponse.json(bugs)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
