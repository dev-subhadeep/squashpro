import { connect } from "@/utils/db"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    const validatePassword = await bcryptjs.compare(password, user.password)
    if (!validatePassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 404 }
      )
    }
    const tokenData = {
      id: user._id,
      name: user._name,
      email: user.email,
      avatar: user.avatar,
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    })
    const response = NextResponse.json(
      {
        message: "Signed in successfully",
      },
      { status: 200 }
    )
    response.cookies.set("token", token, { httpOnly: true })
    return response
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    )
  }
}
