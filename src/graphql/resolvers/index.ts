import { User } from '../schema/objects/User';

const resolvers = {
    Query: {
        hello: (parent:any, args:any, context:any, info:any) => {

            // console.log({ parent, args, context, info });
            const { text } = args;
        
            return text || 'Hello Word!';
        },  
    },

    Mutation: {
        signup: function(parent:any, args:{ user: User }, context:any, info:any) {
            const { user } = args;

            /**
             * @todo Create mongoose User schema, and create a user on this end-point :) 
             */
            console.log(user);

            return {
                _id: '_id',
                fullName: 'fullName',
                nickName: 'nickName',
                email: 'email',
                cellphone: 'cellphone',
                steamUrl: 'steamUrl',
                instagramUrl: 'instagramUrl',
                facebookUrl: 'facebookUrl',
                githubUrl: 'githubUrl',
                points: 0,
                roles: ['USER']!,
            };
        }
    }
};

export default resolvers;
