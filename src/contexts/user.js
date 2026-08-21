import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [username, setUsername] = useState("Joao");

  function alterarUsername(novoUsername) {
    setUsername(novoUsername);
  }

  return (
    <UserContext.Provider value={{ username, alterarUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
