import Conversation from "@/models/conversationModel"
import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json()
    const { senderId, receiverId } = reqbody
    const conversation = await Conversation.create({
      members: [senderId, receiverId],
    })
    return NextResponse.json(conversation)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     const url = new URL(req.url)
//     const conversation = url.searchParams("conversation")
//     const conversations = await Conversation.find({ conversation })
//     return NextResponse.json(conversations)
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 })
//   }
// }
