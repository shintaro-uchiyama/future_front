import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import futureRoutes from "../../routes/future";

const switchRoutes = (
    <Switch>
        {futureRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div><b>Link</b></div>
                    <li><Link to="/search_member">SearchMember</Link></li>
                    <li><Link to="/regist_member">RegistMember</Link></li>
                </div>
                <div>
                    <div>{switchRoutes}</div>
                </div>
            </div>
        );
    }
}

export default App;
