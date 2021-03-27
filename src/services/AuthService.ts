import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-errors';

import { User } from '../graphql/schema/objects/User';

class AuthService {
    private secret: string = process.env.JWT_SECRET as string;
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
            this.secret,
            { expiresIn: '1d' }
        );
    }

    public async signIn(password: string): Promise<string> {

        const isPasswordCorrect = await bcrypt.compare(password, this.user.password);
        if (!isPasswordCorrect) throw new AuthenticationError('Senha incorreta!');

        const token = this.generateUserToken();
        return token;
    }

}

export default AuthService;
