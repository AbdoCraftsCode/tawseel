import mongoose from "mongoose";

const AddonSchema = new mongoose.Schema({
    addonId: { type: Number, required: true },
    addonName: { type: String, required: true },
    addonNameAr: { type: String, required: true },
    additionalPrice: { type: Number, default: 0 },
    imageUrl: { type: String }
}, { timestamps: true });

export const AddonModel = mongoose.model("Addon", AddonSchema);
