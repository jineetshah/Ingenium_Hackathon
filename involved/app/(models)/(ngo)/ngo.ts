import mongoose, { Document, Model, Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "");
mongoose.Promise = global.Promise;

interface INgo extends Document {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  website: string;
  description: string;
}

const ngoSchema: Schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: Number,
    address: String,
    website: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Ngo: Model<INgo> =
  mongoose.models.Organization ||
  mongoose.model<INgo>("Organization", ngoSchema);

export default Ngo;
