import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/utils/db"
import getTokenData from "@/utils/getTokenData"

connect()

export async function GET(request: NextRequest) {
  try {
    const user = await getTokenData(request)
    if (user) {
      return NextResponse.json(user)
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
