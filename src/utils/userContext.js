import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "The Cuisine Restaurant",
});

export default userContext;