import Bug from "@/models/bugModel"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  route: { params: { id: string } }
) {
  try {
    const bug = await Bug.findById(route.params.id)
    if (bug) {
      return NextResponse.json(bug)
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  route: { params: { id: string } }
) {
  try {
    const bug = await Bug.findById(route.params.id)
    if (bug) {
      await Bug.findByIdAndDelete(route.params.id)
      return NextResponse.json(
        { message: "Bug report deleted." },
        { status: 200 }
      )
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  route: { params: { id: string } }
) {
  try {
    const bug = await Bug.findById(route.params.id)
    if (bug) {
      await Bug.findByIdAndUpdate({ _id: route.params.id }, { ...request.body })
      return NextResponse.json(
        { message: "Bug report updated." },
        { status: 200 }
      )
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
