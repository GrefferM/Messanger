import { Schema, model } from 'mongoose'

const TemplateFeatureSchema = new Schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 3,
        required: true
    },
    options: {
        key: String,
        value: String
    }
})

model('TemplateFeature', TemplateFeatureSchema)