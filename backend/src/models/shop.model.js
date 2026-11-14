const mongoose = require('mongoose')
const Owner = require('./owner.model')

const shopSchema = new mongoose.Schema({
    shopName: { type: String, required: true, trim: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true ,index:true},
    phone: { type: String },
    slug: { type: String ,unique:true},
    tagline: { type: String },
    description: { type: String },
    logo: { type: String },
    email: { type: String },
    address: { street: { type: String }, area: { type: String }, city: { type: String }, state: { type: String }, pincode: { type: String } },
    isActive: { type: Boolean, default: true },
    isAcceptingOrders: { type: Boolean, default: true }
}, { timestamps: true })

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop