const resolvers = {
    Query: {
        hello: (parent:any, args:any, context:any, info:any) => {

            // console.log({ parent, args, context, info });
            const { text } = args;
        
            return text || 'Hello Word!';
        },  
    },

    Mutation: {
        test: function(parent:any, args:any, context:any, info:any) {

            // console.log({ parent, args, context, info });
            const { title } = args;
        
            return title || 'Hello Mutation';
        }
    }
};

export default resolvers;
