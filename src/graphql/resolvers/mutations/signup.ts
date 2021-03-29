import { Stream } from 'node:stream';
import bcrypt from 'bcryptjs';

import { User } from '../../schema/objects/User';
import UserRepository from '../../../models/User';
import StorageService from '../../../services/StorageService';

interface Upload {
    filename: string,
    mimetype: MimeType,
    encoding: string,
    createReadStream: () => Stream,
}

export default async function(parent:any, args:{ user: User }, context:any, info:any) {
    const { user: { profileImage, ...rest } } = args;
    const { createReadStream, encoding, filename, mimetype }:Upload = await profileImage;

    const stream = createReadStream();

    try {
        const hashedPw = await bcrypt.hash(rest.password, 12);

        const newUser = new UserRepository({
            ...rest,
            password: hashedPw
        });

        const profileImageData = await new Promise<string>((resolve, reject) => {
            stream.on('data', async function(chunk) {
    
                const buffer = Buffer.from(chunk);
    
                const storageService = new StorageService({ buffer, filename, userId: newUser._id });
    
                const publicUrl = await storageService.uploadFile();
                resolve(publicUrl);
            });
            stream.on('error', err => {
                reject(err || 'Falha ao tentar ler a imagem!');
            });
        });

        newUser.profileImage = profileImageData;

        const savedUser = await newUser.save();

        return {
            ...savedUser._doc,
            _id: savedUser._id.toString(),
        };
    } catch(err) {
        console.log(err);
        throw err;
    }
}