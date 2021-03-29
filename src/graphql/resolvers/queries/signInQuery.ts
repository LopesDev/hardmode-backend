import AuthService from '../../../services/AuthService';
import dayjs from 'dayjs';

import { SignInData } from '../../schema/queries/signIn';
import UserRepository from '../../../models/User';
import { User } from '../../schema/objects/User';

export default async (parent:any, args:SignInData, context:any, info:any) => {
    const { email, password } = args;

    try {
        const user: User = await UserRepository.findOne({ email });
        if (!user) throw new Error('Usuário não foi encontrado.');

        const authService = new AuthService(user);

        const token = await authService.signIn(password);

        const expireDate = dayjs().add(1, 'day').toISOString();

        return { token, expireDate };
    } catch(err) {
        throw err;
    }

}
