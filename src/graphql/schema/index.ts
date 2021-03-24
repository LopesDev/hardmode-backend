import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello(text: String): String!
    }
`;

export default typeDefs;
