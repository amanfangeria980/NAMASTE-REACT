import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy Email",
  },
});

export default UserContext;

// This is the default value, whereas Provider updates the context values as per the api call or any useEffect changes.
