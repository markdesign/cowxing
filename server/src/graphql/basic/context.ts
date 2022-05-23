import characters from "./db/harrypotter.json";
import wands from "./db/wands.json";

const context = {
    isLoggedIn: true,
    characters: characters,
    wands: wands,
};

export default context;
