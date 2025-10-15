import { MdLocationPin } from "react-icons/md";
import type { UserProps } from "../types/user";
import { Link } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
  public_repos,
  bio,
  html_url,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
        <div>
          <p>Repositórios:</p>
          <p className={classes.number}>{public_repos}</p>
        </div>
      </div>
      <div>
        <p>{bio || "Este usuário não possui bio."}</p>
      </div>
      <Link to={html_url} target="_blank">
        Acesse o perfil
      </Link>
    </div>
  );
};

export default User;
