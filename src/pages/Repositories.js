import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories } from "../store/repositories/actions";
import {
  selectRepositoriesItems,
  selectRepositoriesError,
  selectRepositoriesLoading,
} from "../store/repositories/selectors";
import { Link } from "react-router-dom";
import "./Repositories.css";

const Repositories = () => {
  const items = useSelector(selectRepositoriesItems);
  const loading = useSelector(selectRepositoriesLoading);
  const error = useSelector(selectRepositoriesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);

  return (
    <>
      <div className="repositories">
        <h2>Repositories</h2>
        {loading && <div> Loading... </div>}
        {error && <div>Error</div>}
        <input className="search" type="search" placeholder="Search..."></input>
        <div className="repositories-grid">
        {items.map((item) => (
          <div className="repositories-item">
            <Link to={"/repository/" + item.id} className="repositories-item__header">
              <h3>{item.full_name}</h3>
            </Link>
            <div className="repositories-item__owner">
              <img src={item.owner.avatar_url} alt="avatar-owner"></img>
            </div>
            <p><a href={item.html_url}>Link to repo</a></p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Repositories;
