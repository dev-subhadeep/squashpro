import { connect } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { name, email, password, avatar } = reqBody
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json(
        { error: "User already exists. Please log in." },
        { status: 400 }
      )
    }
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    await User.create({ name, email, password: hashedPassword, avatar })
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    )
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
