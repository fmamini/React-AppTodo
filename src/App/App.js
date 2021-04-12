import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers";
import { alertActions } from "../actions";
import { PrivateRoute } from "../components";
import { LoginPage } from "../LoginPage";
//import { RegisterPage } from "../RegisterPage";
import { PanelPage } from "../panel";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="login-background">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/Tasks" component={PanelPage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/register" component={RegisterPage} /> */}
            <Redirect from="*" to="/Tasks" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
