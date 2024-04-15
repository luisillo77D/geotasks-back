import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    texture: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    images:[{
        type:String
    }]
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SamplesOk",sampleSchema)
