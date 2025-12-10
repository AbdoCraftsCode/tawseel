import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderType: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, required: true },

    branchId:   {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Branchhhhhhhh"
    },
      createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },

    address: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },

    numberOfPersons: { type: Number, default: 1 },

    dateTime: { type: Date, required: true },

    carType: { type: String },
    carNumber: { type: String },
    carColor: { type: String },

    phoneNumber: { type: String, required: true },

}, { timestamps: true });

export const OrderModelll = mongoose.model("Orderino", orderSchema);
