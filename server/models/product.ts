import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    img: String,
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    baseCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    price: Number,
    discount: Number,
    productСode: Number,
    description: String,
    options: { 
        keys: String,
        values: String
    }
})

model('Product', ProductSchema)