import { gql } from 'apollo-server-express';

const SIGN_IN_DATA = gql`
    type SignInData {
        token: String!
        expireDate: String
    }
`;

export default SIGN_IN_DATA;
