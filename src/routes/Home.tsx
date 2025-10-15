import { useState } from "react";
import Search from "../components/Search";
import type { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState("");

  const loadUser = async (userName: string) => {
    setError("");
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
      setError("Usuário não encontrado!");
      return;
    }

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
      bio,
      html_url,
    } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
      bio,
      html_url,
    };

    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}

      {error && <Error error={error} />}
    </div>
  );
};

export default Home;
