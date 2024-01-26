import Message from "@/models/messageModel"
import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json()
    const { conversationId, senderId, text } = reqbody
    const newText = await Message.create({
      conversationId,
      senderId,
      text,
    })
    return NextResponse.json(newText)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
