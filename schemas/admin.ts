import mongoose, { Schema, Document } from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
import { Profil } from './profil';
import { User } from './user';
export interface Admin extends Document, User {}

const adminSchema : Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: Buffer, required: true },
    isDeleted: { type: Boolean, required: true },
    username: { type: String, required: false },
    profil: {
        libelle: { type: String, required: false },
        isDeleted: { type: Boolean, required: false }
    },
    role: { type: String, required: false }
});
adminSchema.plugin(uniqueValidator);
export default mongoose.model<Admin>("Admin", adminSchema);