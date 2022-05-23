const books = [
    {
        id: 1,
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        id: 2,
        title: "City of Glass",
        author: "Paul Auster",
    },
];
// import CharactersData from "./db/harrypotter.json";
// import WandsData from "./db/wands.json";

const resolvers = {
    // This is an interface
    Character: {
        __resolveType(character: any, context: any, info: any) {
            if (character.species) {
                return "NonHuman";
            }
            if (!character.species) {
                return "Human";
            }
            return null; // GraphQLError is thrown
        },
    },

    Human: {
        wand(parent: any, _: any, context: any) {
            return context.wands.find((item: any) => item.character_id === parent.id);
        },
    },

    Wand: {
        length: (parent: any) => {
            return parent.length ?? 0;
        },
    },

    Query: {
        books: () => books,
        humans: (_: any, __: any, context: any) => {
            return context.characters.filter((cha: any) => !cha.species);
        },
        human: (_: any, args: any, context: any) => {
            return context.characters.find((cha: any) => cha.id === args.id);
        },
        nonHumans: (_: any, __: any, context: any) => {
            return context.characters.filter((cha: any) => !!cha.species);
        },
        characters: (_: any, __: any, context: any) => {
            return context.characters; // pass this to Character above
        },
    },

    Mutation: {
        createCharacter: (_: any, args: any, context: any) => {
            console.log("[resolvers.ts 60] args : ", args.data);
            const data = { ...args.data, id: context.characters.length + 1 };
            context.characters.push(data);
            console.log('[resolvers.ts 63] data : ', data);
            return data;
        },
    },
};

export default resolvers;
