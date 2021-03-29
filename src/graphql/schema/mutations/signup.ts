import { gql } from 'apollo-server-express';

const SIGN_UP = gql`
    extend type Mutation {
        signUp(user: UserData!): User!
    }
`;

export default SIGN_UP;