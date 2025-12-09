import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nameAr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    descriptionAr: {
        type: String,
        default: ""
    },
    image: {
        secure_url: { type: String, required: true },
        public_id: { type: String, required: true }
    },
    status: {
        type: Number,
        default: 1
    },
    isMaterialCategory: {
        type: Boolean,
        default: true
    },
    items: {
        type: Array,
        default: []
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const CategoryModel = mongoose.model("Category", CategorySchema);
