import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  name: string,
  password: string,
}

const UserSchema: mongoose.Schema<UserDocument> = new mongoose.Schema({
  name: {type: 'String', unique: true},
  password: {type: 'String'},
});

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);
