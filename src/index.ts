import * as dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import context from './graphql/context';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

const app = express();

const { DB_HOST, DB_COLLECTION, DB_USER, DB_PASS, PORT } = process.env;

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}.njrgo.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    graphqlServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`server running into http://localhost:${PORT}${graphqlServer.graphqlPath}`);
    });
})
.catch(err => {
    console.log(`Server error: ${err.message}`);
    throw err;
});
