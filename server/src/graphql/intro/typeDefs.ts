import { gql } from "apollo-server-express";

const schema = gql`

    enum Status {
        AVAIALBLE
        NOT_AVAILABLE
    }

    type User {
        username: String!
    }

    type StarWarsShips {
        ships: [String]
    }

    type Characters {
        name: String
        age: Int
        email: String
    }

    type Space {
        name: String
        rent: String
        status: Status
    }

    type Query {
        me: User
        emails: [String]
        charactersIndex(id: Int): Characters
        foobar: StarWarsShips
        getMsg: String
        getSpace(id: ID!): Space!
        spaces(status: Status): [Space]
    }

    input SpaceInput {
        name: String
        rent: String
        status: String
    }



    type Mutation {
        addMsg(msg: String): String

        createSpace(input: SpaceInput): Space!
        updateSpace(id: ID!, input: SpaceInput): Space!
    }
`;

export default schema;

