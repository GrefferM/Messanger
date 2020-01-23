import { Schema, model } from 'mongoose'

const CategoryProductSchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    baseCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'baseCategory',
        required: true
    }
})

model('CategoryProduct', CategoryProductSchema)