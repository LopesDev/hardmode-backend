import { Request } from 'express';
import AuthService from '../../services/AuthService';

type ContextParams = {
    req: Request
}

export default function context({ req }: ContextParams){
    const BearerToken = req.get('Authorization');

    const AuthenticatedUser = AuthService.verifyToken(BearerToken);

    return { AuthenticatedUser }
}