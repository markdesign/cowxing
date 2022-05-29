import neo4j from "neo4j-driver";
import { Neo4jGraphQL } from "@neo4j/graphql";
import typeDefs from "./schema";

const Neo4jApp = async () => {
    const url = process.env.NEO4J || "";
    const userName = process.env.NEO4J_USER_NAME || "";
    const password = process.env.NEO4J_PASSWORD || "";
    const driver = neo4j.driver(url, neo4j.auth.basic(userName, password));
    const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
    const schema = await neoSchema.getSchema();
    return schema;
};

export { Neo4jApp };
