import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Types.ObjectId,
      ref: "conversations",
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
)

const Message =
  mongoose.models.messages || mongoose.model("messages", messageSchema)

export default Message
