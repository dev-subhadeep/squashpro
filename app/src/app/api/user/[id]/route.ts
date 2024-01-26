import User from "@/models/userModel"
import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

connect()

export async function GET(
  request: NextRequest,
  route: { params: { id: string } }
) {
  try {
    const { id } = route.params
    const user = await User.findOne({ _id: id }).select("_id email name avatar")
    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
