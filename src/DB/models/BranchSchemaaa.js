import mongoose from "mongoose";

let BranchIDCounter = 0;

const BranchSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    address: { type: String, required: true },

    status: {
        type: Number,
        default: 1
    },

    minDeliveryTime: {
        type: String,
        default: null
    },

    minPickupTime: {
        type: String,
        default: null
    },

    rafeeqRefId: {
        type: Number,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

// Auto Increment ID
BranchSchema.pre("save", async function (next) {
    if (!this.id) {
        BranchIDCounter += 1;
        this.id = BranchIDCounter;
    }
    next();
});

export const BranchModell = mongoose.model("Branchhhhhhhh", BranchSchema);
