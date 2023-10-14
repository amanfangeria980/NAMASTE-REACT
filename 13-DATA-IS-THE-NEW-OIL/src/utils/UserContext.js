import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Aman Fangeria",
    email: "amanfangeria980@gmail.com",
  },
});

export default UserContext;
