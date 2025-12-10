import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    buildingName: { type: String, required: true },
    street: { type: String, required: true },
    apartmentNumber: { type: String, default: "" },
    additionalDirection: { type: String, default: "" },
    phoneNumber: { type: String, required: true },
    floor: { type: String, default: "" },
    addressLabel: { type: String, default: "" },
    addressType: { type: Number, default: 0 } // 0=Home, 1=Work, etc.
}, { timestamps: true });

export const Address = mongoose.model("Address", addressSchema);


// static const String createOrder = '$apiBaseUrl/Order/CreateCustomerOrder';
// static const String getCustomerOrder = '$apiBaseUrl/Order/GetCustomerOrder';
// static const String getCustomerOrderById = '$apiBaseUrl/Order/GetOrderById/{id}';
// static const String getAllCustomerOrders = '$apiBaseUrl/Order/GetCustomerOrders';
// static const String getAllCurrentCustomerOrders = '$apiBaseUrl/Order/GetCurrentCustomerOrders';
