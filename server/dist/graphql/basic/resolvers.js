"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        __resolveType(character, context, info) {
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
        wand(parent, _, context) {
            return context.wands.find((item) => item.character_id === parent.id);
        },
    },
    Wand: {
        length: (parent) => {
            var _a;
            return (_a = parent.length) !== null && _a !== void 0 ? _a : 0;
        },
    },
    Query: {
        books: () => books,
        humans: (_, __, context) => {
            return context.characters.filter((cha) => !cha.species);
        },
        human: (_, args, context) => {
            return context.characters.find((cha) => cha.id === args.id);
        },
        nonHumans: (_, __, context) => {
            return context.characters.filter((cha) => !!cha.species);
        },
        characters: (_, __, context) => {
            return context.characters; // pass this to Character above
        },
    },
    Mutation: {
        createCharacter: (_, args, context) => {
            console.log("[resolvers.ts 60] args : ", args.data);
            const data = Object.assign(Object.assign({}, args.data), { id: context.characters.length + 1 });
            context.characters.push(data);
            console.log('[resolvers.ts 63] data : ', data);
            return data;
        },
    },
};
exports.default = resolvers;
