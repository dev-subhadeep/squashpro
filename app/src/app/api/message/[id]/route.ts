import Message from "@/models/messageModel"
import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function GET(req: NextRequest, route: { params: { id: string } }) {
  try {
    const id = route.params.id
    const messages = await Message.find({ conversationId: id })
    return NextResponse.json(messages)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
