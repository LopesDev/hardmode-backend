import { gql } from 'apollo-server-express';

import { Role } from '../enums/Role';

const USER = gql`
    type User {
        _id: ID!
        fullName: String!
        nickName: String!
        email: String!
        profileImage: String
        cellphone: String
        steamUrl: String
        instagramUrl: String
        facebookUrl: String
        githubUrl: String
        points: Int
        roles: [Role]!
        createdAt: String!
        updatedAt: String!
    }
`;

interface User {
    _id: string,
    fullName: string,
    nickName: string,
    profileImage: string | Promise<any>,
    password: string,
    email: string,
    cellphone: string,
    steamUrl: string,
    instagramUrl: string,
    facebookUrl: string,
    githubUrl: string,
    points: number,
    roles: Array<Role>,
    createdAt: string,
    updatedAt: string,
}

export { USER as default, User };
