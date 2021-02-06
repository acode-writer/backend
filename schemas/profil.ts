import user, { User } from './user';
import mongoose, { Schema, Document } from 'mongoose';

const uniqueValidator = require("mongoose-unique-validator");

export interface Profil extends Document {
  label: string;
  isDeleted: boolean;
  users: User[];
}

const profilSchema : Schema = new Schema({
  label: { type: String, required: true, unique: true },
  isDeleted: { type: Boolean, required: true },
  users: {type: Schema.Types.ObjectId, ref:"User", required:false}
})

profilSchema.plugin(uniqueValidator);

export default mongoose.model<Profil>("Profil",profilSchema);