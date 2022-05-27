"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fakeDb1 = {};
let fakeDb2 = [
    { id: 1, name: "office", rent: "$25", status: "AVAIALBLE" },
    { id: 2, name: "co-working", rent: "$10", status: "NOT_AVAILABLE" },
];
const resolvers = {
    Query: {
        me: () => {
            return {
                username: "Mark",
            };
        },
        emails: () => {
            return ["markdesign@gmail.com"];
        },
        charactersIndex: (_, args) => {
            const char = characters[args.id];
            return {
                name: char,
                age: 100,
                email: "test@test.com"
            };
        },
        foobar: () => {
            return {
                list: ["foo", "bar"],
            };
        },
        getMsg: () => {
            console.log("[resolvers.ts 27] fakeDb.message : ", fakeDb1.message);
            return fakeDb1.message;
        },
        getSpace: (_, args) => {
            console.log("[resolvers.ts 36] fakeDb2 : ", fakeDb2);
            return fakeDb2.find(space => space.id.toString() === args.id);
        },
        spaces: (_, args) => {
            if (args.status) {
                return fakeDb2.filter(space => space.status === args.status);
            }
            return fakeDb2;
        }
    },
    StarWarsShips: {
        ships: () => {
            return ships;
        },
    },
    Mutation: {
        addMsg(_, args) {
            console.log("[resolvers.ts 38] args.msg : ", args.msg);
            fakeDb1.message = args.msg;
        },
        createSpace: (_, args) => {
            fakeDb2[fakeDb2.length] = { id: fakeDb2.length + 1, name: args.input.name, rent: args.input.rent, status: args.input.status };
            return fakeDb2[fakeDb2.length - 1];
        },
        updateSpace: (_, args) => {
            const index = args.id - 1;
            fakeDb2[index] = { id: args.input.id, name: args.input.name, rent: args.input.rent, status: args.input.status };
            return fakeDb2[index];
        },
    },
};
exports.default = resolvers;
const characters = [
    "Obi-Wan Kenobi",
    "Qui-Gon Jinn",
    "Han Solo",
    "Luke Skywalker",
    "Luke Skywalker",
    "Darth Vader",
    "Grand Moff Wilhuff Tarkin",
    "Jabba the Hutt",
    "Padme Amidala",
    "Rey",
    "Finn",
    "Kylo Ren",
    "Darth Sidious",
    "Chewbacca",
];
const ships = [
    "X-wing",
    "TIE Fighter",
    "Millennium Falcon",
    "Super Star Destroyer",
    "Y-wing",
    "B-wing",
    "Snoke’s Supremacy Flagship",
    "Slave I",
    "The Ghost",
    "Jedi Starfighter",
    "Lambda-class T-4a Shuttle",
    "N-1 Naboo Starfighter",
];
