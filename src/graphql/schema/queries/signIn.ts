import { gql } from 'apollo-server-express';

const SIGN_IN = gql`
    extend type Query {
        signIn(email: String!, password: String!): SignInData!
    }
`;

interface SignInData {
    email: string,
    password: string
}

export { SIGN_IN as default, SignInData };
