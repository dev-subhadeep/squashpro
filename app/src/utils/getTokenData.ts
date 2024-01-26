import { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

async function getTokenData(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || ""
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!)
    return decodedToken
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default getTokenData
