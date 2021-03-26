import { Stream } from 'node:stream';
import { User } from '../../schema/objects/User';
import StorageService from '../../../services/StorageService';

interface Upload {
    filename: string,
    mimetype: MimeType,
    encoding: string,
    createReadStream: () => Stream,
}

export default async function(parent:any, args:{ user: User }, context:any, info:any) {
    const { user: { profileImage, ...rest } } = args;

    /**
     * @todo Create mongoose User schema, and create a user on this end-point :) 
     */
    const { createReadStream, encoding, filename, mimetype }:Upload = await profileImage;

    const stream = createReadStream();

    try {
        const profileImageData = await new Promise<string>((resolve, reject) => {
            stream.on('data', async function(chunk) {
    
                const buffer = Buffer.from(chunk);
    
                const storageService = new StorageService({ buffer, filename });
    
                const publicUrl = await storageService.uploadFile();
                resolve(publicUrl);
            });
            stream.on('error', err => {
                reject(err || 'Falha ao tentar ler a imagem!');
            });
        });

        return {
            _id: '_id',
            fullName: 'fullName',
            nickName: 'nickName',
            email: 'email',
            cellphone: 'cellphone',
            profileImage: profileImageData,
            steamUrl: 'steamUrl',
            instagramUrl: 'instagramUrl',
            facebookUrl: 'facebookUrl',
            githubUrl: 'githubUrl',
            points: 0,
            roles: ['USER']!,
        };
    } catch(err) {
        console.log(err);
        throw err;
    }
}