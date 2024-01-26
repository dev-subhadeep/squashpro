import mongoose from "mongoose"

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    source: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["Critical", "Major", "Medium", "Low"],
    },
    raised_by: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
)

const Bug = mongoose.models.bugs ?? mongoose.model("bugs", bugSchema)

export default Bug
