import signup from './mutations/signup';

const resolvers = {
    Query: {
        hello: (parent:any, args:any, context:any, info:any) => {

            // console.log({ parent, args, context, info });
            const { text } = args;
        
            return text || 'Hello Word!';
        },  
    },

    Mutation: { signup }
};

export default resolvers;
