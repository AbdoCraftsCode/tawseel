import mongoose from "mongoose";

const VariationSchema = new mongoose.Schema({
    itemVariationId: { type: Number, required: true },
    name: { type: String, required: true },
    nameAr: { type: String, required: true },
    note: { type: String },
    noteAr: { type: String },
    additionalPrice: { type: Number, default: 0 },
    attributeId: { type: Number, required: true },
    attributeName: { type: String, required: true },
    attributeNameAr: { type: String, required: true }
}, { _id: false });

const AttributeSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    nameAr: { type: String, required: true },

    // variations Array
    variations: [VariationSchema]
}, { timestamps: true });

export const AttributeModel = mongoose.model("Attribute", AttributeSchema);
