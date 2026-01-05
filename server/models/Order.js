const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema( 
    {
        userEmail: { type: String, required: true},
        orderItems: [
            {
                productId:{type: mongoose.Schema.Types.ObjectId,ref: 'Product'},
                name: String,
                qty: Number,
                price: Number,
                imageUrl: String
            }
        ],
        totalPrice: { type: Number, required: true}
    },
    { timestamps: true}
);
module.exports = mongoose.model('Order',orderSchema);