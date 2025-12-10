import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }
}, { timestamps: true });

export const FAQModel = mongoose.model("FAQ", FAQSchema);
