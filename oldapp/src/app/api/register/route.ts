import connect from "@/utils/db"
import User from "@/models/user.model"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { name, email, password } = reqBody
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ error: "User exists" }, { status: 500 })
    }
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    const newUser = await User.create({ name, email, password: hashedPassword })
    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 201 }
    )
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
