import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: "",
            trim: true
        },

        image: {
            secure_url: { type: String, required: true },
            public_id: { type: String, required: true }
        },

        sizes: [
            {
                sizeName: {
                    type: String,
                    required: true,
                    trim: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],

        isAvailable: {
            type: Boolean,
            default: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        }

    },
    { timestamps: true }
);

export const MealModel = mongoose.model("Meal", mealSchema);
