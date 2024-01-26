import Conversation from "@/models/conversationModel"
import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  try {
    const id = route.params.id
    const conversations = await Conversation.find({ members: { $in: id } })
    return NextResponse.json(conversations)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
