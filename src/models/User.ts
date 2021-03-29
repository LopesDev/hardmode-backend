import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: String,
    cellphone: String,
    steamUrl: String,
    instagramUrl: String,
    facebookUrl: String,
    githubUrl: String,
    points: {
        type: Number,
        default: 0,
    },
    roles: {
        type: [String],
        default: ['USER'],
    },
}, { timestamps: true });

export default model('Users', UserSchema);
