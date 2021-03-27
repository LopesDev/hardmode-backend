import { gql } from 'apollo-server-express';

const SIGN_IN = gql`
    type Query {
        signIn(email: String!, password: String!): User!
    }
`;

export default SIGN_IN;
