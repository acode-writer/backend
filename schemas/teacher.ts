import mongoose, { Schema, Document } from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
import User , { extendSchemaa } from './user';

export interface Teacher extends User, Document {}

// const teacherSchema : Schema = new Schema({
//     email: { type: String, required: true, unique: true },
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     password: { type: String, required: true },
//     avatar: { type: Buffer, required: true },
//     isDeleted: { type: Boolean, required: true },
//     username: { type: String, required: false },
//     role: { type: String, required: false }
// });
// teacherSchema.plugin(uniqueValidator);

const teacherSchema = extendSchemaa(User);
export default mongoose.model<Teacher>("Teacher", teacherSchema);