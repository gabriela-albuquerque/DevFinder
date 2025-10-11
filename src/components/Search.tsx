import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <h2>Encontre um usuário:</h2>
      <p>E conheça seus repositórios com mais estrelas</p>
      <div>
        <input type="text" placeholder="Digite o nome do usuário" />
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
