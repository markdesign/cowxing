const { gql } = require("apollo-server");

const typeDefs = gql`
    # type Query {
    #     neo4j: String
    # }
    type Movie {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;

export default typeDefs;
