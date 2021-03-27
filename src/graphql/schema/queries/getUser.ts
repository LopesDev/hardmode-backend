import { gql } from 'apollo-server-express';

const GET_USER = gql`
    extend type Query {
        getUser: User!
    }
`;

export default GET_USER;

