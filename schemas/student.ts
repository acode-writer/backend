import mongoose, { Schema, Document } from 'mongoose';
import { ProfilSortie } from './profil-sortie';
import uniqueValidator from "mongoose-unique-validator";
import { User } from './user';
export interface Student extends User, Document {
  profilSortie: ProfilSortie;
}

const studentSchema : Schema = new Schema({
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
    role: { type: String, required: false },
    profilSortie: {
        students: Student[],
        isDeleted: { type: Boolean, required: false }
    }
});

studentSchema.plugin(uniqueValidator);

export default mongoose.model<Student>("Student",studentSchema);