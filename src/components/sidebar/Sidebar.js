import React from "react";
import SideNav, {
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./sidebar.css";
import Tasks from "../../page/Tasks";
import * as Ioicons from "react-icons/io5";
import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="Tasks">
                    <NavItem eventKey="Tasks">
                      <NavIcon>
                        <Ioicons.IoHomeOutline />
                      </NavIcon>
                      <NavText>Tasks</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route path="/Tasks" exact component={Tasks} />
                </main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default Sidebar;
