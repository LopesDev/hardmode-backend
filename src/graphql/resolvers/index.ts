import signIn from './queries/signInQuery';
import signUp from './mutations/signup';

const resolvers = {
    Query: { signIn },

    Mutation: { signUp }
};

export default resolvers;
