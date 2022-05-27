const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type Movie {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;

const driver = neo4j.driver(
    "neo4j+s://448da08a.databases.neo4j.io",
    neo4j.auth.basic("neo4j", "iVIoUZsbdp1oBh-TbYDEx336lCn5AXEvAk7j3ozCJHk")
);

export const neoSchema = new Neo4jGraphQL({ typeDefs, driver });