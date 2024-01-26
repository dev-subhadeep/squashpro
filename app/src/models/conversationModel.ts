import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
)

const Conversation =
  mongoose.models.conversations ||
  mongoose.model("conversations", conversationSchema)

export default Conversation
