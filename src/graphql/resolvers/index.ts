import signIn from './queries/signInQuery';
import getUser from './queries/getUserQuery';

import signUp from './mutations/signup';

const resolvers = {
    Query: { signIn, getUser },

    Mutation: { signUp }
};

export default resolvers;
