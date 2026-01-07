const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
    {
        userEmail: { type: String, required: true },
        orderItems: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                name: String,
                qty: Number,
                price: Number,
                imageUrl: String
            }
        ],
        totalPrice: { type: Number, required: true },
        status: {
            type: String,
            default: 'Processing',
            enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled']
        },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date }
    },
    { timestamps: true }
);
module.exports = mongoose.model('Order', orderSchema);