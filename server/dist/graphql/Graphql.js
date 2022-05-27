"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGraphQlEndpoint = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const merge_1 = require("@graphql-tools/merge");
const typeDefs_1 = __importDefault(require("./intro/typeDefs"));
const resolvers_1 = __importDefault(require("./intro/resolvers"));
const typeDefs_2 = __importDefault(require("./basic/typeDefs"));
const resolvers_2 = __importDefault(require("./basic/resolvers"));
const context_1 = __importDefault(require("./basic/context"));
const initGraphQlEndpoint = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = (0, merge_1.mergeTypeDefs)([typeDefs_1.default, typeDefs_2.default]);
    const resolvers = (0, merge_1.mergeResolvers)([resolvers_1.default, resolvers_2.default]);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema,
        resolvers: resolvers,
        context: context_1.default,
    });
    yield server.start();
    server.applyMiddleware({ app, path: "/api/v1/graphql" });
    console.log(`🚀 Server ready at http://localhost:4301${server.graphqlPath}`);
});
exports.initGraphQlEndpoint = initGraphQlEndpoint;
