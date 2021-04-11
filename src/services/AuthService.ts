import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-errors';

import { User } from '../graphql/schema/objects/User';

export interface DecodedToken {
    id: string,
    email: string,
    iat: number,
    exp: number
}

class AuthService {
    private user: User;

    constructor(user: User){
        this.user = user;
    }

    private generateUserToken(): string {
        return jwt.sign(
            {
                id: this.user._id,
                email: this.user.email
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' }
        );
    }

    public async signIn(password: string): Promise<string> {

        const isPasswordCorrect = await bcrypt.compare(password, this.user.password);
        if (!isPasswordCorrect) throw new AuthenticationError('Senha incorreta!');

        const token = this.generateUserToken();
        return token;
    }

    public static verifyToken(Authorization?: string): DecodedToken| undefined {
        if (!Authorization) return;

        const token = Authorization.split(' ')[1];

        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
            if (!decodedToken) return;

            return decodedToken;
        } catch (err) {
            throw err;
        }
    }

}

export default AuthService;
