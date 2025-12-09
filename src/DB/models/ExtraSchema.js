import mongoose from "mongoose";

const ExtraSchema = new mongoose.Schema({
    itemExtraId: { type: Number, required: true },
    name: { type: String, required: true },
    nameAr: { type: String, required: true },
    status: { type: Number, default: 1 }, // 1 active, 0 inactive
    additionalPrice: { type: Number, default: 0 }
}, { timestamps: true });

export const ExtraModel = mongoose.model("Extra", ExtraSchema);
