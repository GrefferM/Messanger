import { Schema, model } from 'mongoose'

const productCategorySchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    icon: String,
    baseCategory: {
        type: Schema.Types.ObjectId,
        ref: 'baseCategory',
        required: true
    }
})

model('productCategory', productCategorySchema)