import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello(text: String): String!
    }
    type Mutation {
        test(title: String): String!
    }
`;

export default typeDefs;
