import mongoose, {Schema} from 'mongoose'

const adminSchema = new Schema({
    name : String,
    password: String,
    email: String,
    gender: String,
    mobile: Number
})

export const Admin = mongoose.model('admin', adminSchema);