import path from 'path';
import { Storage, Bucket } from '@google-cloud/storage';

interface CustomFile {
    filename: string,
    buffer:Buffer,
    userId: string,
}

export default class StorageService {
    private customFile:CustomFile;

    private bucket:Bucket;

    constructor(customFile:CustomFile) {

        const storage = new Storage({
            projectId: process.env.PROJECT_ID,
            keyFilename: path.join(__dirname, '..', '..', 'credentials', 'gcsa.json'),
        });

        this.customFile = customFile;

        this.bucket = storage.bucket(process.env.BUCKET as string);

    }

    public async uploadFile(): Promise<string> {
        const { filename, buffer, userId } = this.customFile;

        const renamedFile = `${userId}-${filename.replace(/ /g, '')}`;
        try {
            const blob = this.bucket.file(renamedFile);
            await blob.save(buffer);

            return blob.publicUrl();
        } catch(err) {
            throw err;
        }
    }
}