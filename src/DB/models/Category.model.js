import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            secure_url: { type: String, required: true },
            public_id: { type: String, required: true }
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        }
    },
    { timestamps: true }
);

export const CategoryModel = mongoose.model("Category", categorySchema);
