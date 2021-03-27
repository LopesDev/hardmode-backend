import { gql } from 'apollo-server-express';

import ROLE from './enums/Role';
import USER from './objects/User';
import USER_DATA from './inputs/UserData';
import SIGN_IN from './queries/signin';
import SIGN_UP from './mutations/signup';

const typeDefs = gql`
    # Enums
    ${ROLE}

    # Objects
    ${USER}

    # Inputs
    ${USER_DATA}

    # Queries
    ${SIGN_IN}

    # Mutations
    ${SIGN_UP}
`;

export default typeDefs;
