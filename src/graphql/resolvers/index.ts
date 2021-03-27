import signIn from './queries/signIn';
import signUp from './mutations/signup';

const resolvers = {
    Query: { signIn },

    Mutation: { signUp }
};

export default resolvers;
