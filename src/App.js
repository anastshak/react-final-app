import "./App.css";
import Repositories from "./pages/Repositories";
import Repo_card from "./pages/Repo_card";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <NavLink activeStyle={{ color: "red" }} to="/repositories">
          Repositories
        </NavLink>
      </ul>

      <Switch>
        <Route path="/" exact>
          <div className="welcome-page">Welcome</div>
        </Route>
        <Route path="/repositories" component={Repositories}></Route>
        <Route path="/repository/:id" component={Repo_card}></Route>
        <Route path="*">No match</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
