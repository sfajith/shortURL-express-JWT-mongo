import mongoose from 'mongoose'
import nanoid from 'nanoid'
import {Schema} from 'mongoose'

const urlSchema = new Schema({
    origin:{
        type: String,
        unique: true,
        required: true,
    },

    shortURL: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(6)
    }
})

const Url = mongoose.model('Url', urlSchema)

export default Url