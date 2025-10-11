import { useState } from "react";
import Search from "../components/Search";
import type { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
