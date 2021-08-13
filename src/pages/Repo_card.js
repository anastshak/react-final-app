import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectRepositoryById } from "../store/repositories/selectors";
import "./Repo_card.css";


const User = () => {
    const params = useParams();
    const repository = useSelector(selectRepositoryById(params.id));
    if (!repository) {
        return <div>Loading data...</div>;
    }

    return (
        <div className="repo">
            <h3>Repository's name: {repository.name}</h3>
            <img src={repository.owner.avatar_url} alt="owner's avatar"></img>
            <p>Owner's login: <a href={repository.owner.html_url}>{repository.owner.login}</a></p>
        </div>
    );
};

export default User;