import { Schema, model, SchemaTypes } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    color: Number,
    price: Number,
    discount: Number,
    productСode: Number,
    shortDescription: Array(String),
    description: String,
    options: {
        key: String,
        value: String
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    }
})

model('product', productSchema)