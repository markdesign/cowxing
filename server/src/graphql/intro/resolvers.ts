let fakeDb1: { message?: string } = {};

let fakeDb2 = [
    { id: 1, name: "office", rent: "$25", status: "AVAIALBLE" },
    { id: 2, name: "co-working", rent: "$10", status: "NOT_AVAILABLE" },
];

interface Message {
    msg: string;
}

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
        charactersIndex: (_: any, args: { id: number }) => {
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
        getSpace: (_: any, args: { id: string }) => {
            console.log("[resolvers.ts 36] fakeDb2 : ", fakeDb2);
            return fakeDb2.find(space => space.id.toString() === args.id);
        },
        spaces: (_: any, args: {name: string, rent: string, status: string}) => {
            if(args.status) {
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
        addMsg(_: any, args: { msg: string }): void {
            console.log("[resolvers.ts 38] args.msg : ", args.msg);
            fakeDb1.message = args.msg;
        },
        createSpace: (_: any, args: any) => {
            fakeDb2[fakeDb2.length] = { id: fakeDb2.length + 1, name: args.input.name, rent: args.input.rent, status: args.input.status };
            return fakeDb2[fakeDb2.length - 1];
        },
        updateSpace: (_: any, args: any) => {
            const index = args.id - 1;
            fakeDb2[index] = { id: args.input.id, name: args.input.name, rent: args.input.rent, status: args.input.status  };
            return fakeDb2[index];
        },
    },
};

export default resolvers;

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
