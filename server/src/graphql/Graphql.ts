import { ApolloServer } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import introSchema from "./intro/typeDefs";
import introResolvers from "./intro/resolvers";
import basicSchema from "./basic/typeDefs";
import basicResolvers from "./basic/resolvers";

import context from "./basic/context";

const initGraphQlEndpoint = async (app: any) => {
    const schema = mergeTypeDefs([introSchema, basicSchema]);
    const resolvers = mergeResolvers([introResolvers, basicResolvers]);

    const server = new ApolloServer({
        typeDefs: schema,
        resolvers: resolvers,
        context: context,
    });

    await server.start();
    server.applyMiddleware({ app, path: "/api/v1/graphql" });

    console.log(`🚀 GraphQL Server ready at http://localhost:4301${server.graphqlPath}`);
};

export { initGraphQlEndpoint };
