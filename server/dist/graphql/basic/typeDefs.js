"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const schema = (0, apollo_server_express_1.gql) `
    type Book {
        title: String
        author: String
    }

    type Wand {
        wood: String!
        core: String!
        length: Float
    }

    enum GENDER {
        male
        female
    }

    interface Character {
        id: ID!
        name: String
        gender: GENDER
    }

    type Human implements Character {
        id: ID!
        name: String
        gender: GENDER
        dateOfBirth: String
        actor: String
        image: String
        wand: Wand
    }

    type NonHuman implements Character {
        id: ID!
        name: String
        gender: GENDER
        species: String
    }

    type Query {
        books: [Book]
        humans: [Human!]!
        human(id: Int!): Human
        nonHumans: [NonHuman!]!

        # using a Interface, needs a separate resolver
        characters: [Character!]!
    }

    input CreateInput {
        name: String!
        gender: GENDER!
        dateOfBirth: String!
        actor: String!
        image: String!
    }

    type Mutation {
        createCharacter(data: CreateInput!): Human
    }
`;
exports.default = schema;
