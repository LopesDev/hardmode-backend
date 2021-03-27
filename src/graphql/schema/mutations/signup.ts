import { gql } from 'apollo-server-express';

const SIGN_UP = gql`
    type Mutation {
        signUp(user: UserData!): User!
    }
`;

export default SIGN_UP;