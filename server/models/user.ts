import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    }
})

model('user', userSchema)