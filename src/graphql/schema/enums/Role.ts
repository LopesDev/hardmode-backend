import { gql } from 'apollo-server-express';

const ROLE = gql`
    enum Role {
        USER
        ADMIN
    }
`;

type Role = 'USER' | 'ADMIN';

export { ROLE as default, Role };