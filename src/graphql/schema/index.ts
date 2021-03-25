import { gql } from 'apollo-server-express';

import ROLE from './enums/Role';
import USER from './objects/User';
import USER_DATA from './inputs/UserData';
import SIGN_UP from './mutations/signup';

const typeDefs = gql`
    # Enums
    ${ROLE}

    # Objects
    ${USER}

    # Inputs
    ${USER_DATA}

    # Queries
    type Query {
        hello(text: String): String!
    }

    # Mutations
    ${SIGN_UP}
`;

export default typeDefs;
