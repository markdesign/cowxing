const path = require("path");
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { mergeSchemas } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { Neo4jApp } from "../neo4j/Neo4j";

import context from "./basic/context";

import introSchema from "./intro/typeDefs";
import introResolvers from "./intro/resolvers";
import basicSchema from "./basic/typeDefs";
import basicResolvers from "./basic/resolvers";

const initGraphQlEndpoint = async (app: any) => {
    const httpServer = http.createServer(app);

    // Neo4j
    const schema = await Neo4jApp();
    const mergedTypeDef = mergeTypeDefs([introSchema, basicSchema]);
    const mergedResolver = mergeResolvers([introResolvers, basicResolvers]);
    const mergeSchema = mergeSchemas({
        schemas: [schema],
        typeDefs: mergedTypeDef,
        resolvers: mergedResolver,
    });
    const server = new ApolloServer({
        schema: mergeSchema,
        context: context,
        introspection: true,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app, path: "/api/v1/graphql" });
    console.log(`🚀 GraphQL Server ready at http://localhost:4301${server.graphqlPath}`);
};

export { initGraphQlEndpoint };
