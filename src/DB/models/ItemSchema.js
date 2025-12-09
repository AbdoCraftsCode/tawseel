import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({

    name: { type: String, required: true },
    nameAr: { type: String },

    description: { type: String },
    descriptionAr: { type: String },

    price: { type: Number, required: true },
    pre_Price: { type: Number },

    imageUrl: { type: String },

    status: { type: Number, default: 1 },
    isPointsOptionActive: { type: Boolean, default: false },

    taxValue: { type: Number },
    taxId: { type: Number },

    note: { type: String },
    itemType: { type: Number },

    isFeatured: { type: Boolean, default: false },
    isPopularActive: { type: Boolean, default: false },

    // بدل الـ Number
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    // بدل Array<Number>
    branchIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Branchhhhhhhh"
        }
    ],

    itemExtras: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Extra"
        }
    ],

    attributes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attribute"
        }
    ],

    itemAddons: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Addon"
        }
    ]

}, { timestamps: true });

export const ItemModel = mongoose.model("Item", ItemSchema);











