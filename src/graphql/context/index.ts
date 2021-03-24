import { Request } from 'express';

type ContextParams = {
    req: Request
}

export default function context({ req }: ContextParams){
    // console.log(`Authorization: ${req.get('Authorization')}`);

    return { user: {
        name: 'Matheus Lopes',
        _id: 'Teste de Id'
    } }
}