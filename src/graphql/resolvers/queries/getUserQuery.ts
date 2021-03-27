import { AuthenticationError } from 'apollo-server-errors';

import UserRepository from '../../../models/User';
import { User } from '../../schema/objects/User';

import { DecodedToken } from '../../../services/AuthService';

interface Context {
    AuthenticatedUser?: DecodedToken
}

export default async (parent:any, args:any, context:Context, info:any) => {
    const { AuthenticatedUser } = context;
    if (!AuthenticatedUser) throw new AuthenticationError('Você não tem permissão para acessar essas informações');

    const user: User = await UserRepository.findById(AuthenticatedUser.id);

    return user;
}
