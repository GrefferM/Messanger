import { Schema, model } from 'mongoose'

const CategoryBaseSchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    icon: String
})

model('CategoryBase', CategoryBaseSchema)