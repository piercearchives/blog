import { useContext } from "react";
import { UserContext } from "../../contexts/user";

const User = () => {
  const { username, alterarUsername } = useContext(UserContext);

  return (
    <div>
      <h1>Meu username e: {username}</h1>
      <br />
      <button type="button" onClick={() => alterarUsername("@pierce")}>
        Trocar username
      </button>
      <br />
    </div>
  );
};

export default User;
