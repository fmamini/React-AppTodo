import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { connect } from "react-redux";
import { userActions } from "../actions";
import "./panelpage.css";
import Main from "../components/Main/main";

class PanelPage extends React.Component {
  render() {
    const { user, users } = this.props;
    return (
      <>
        <div className="navbars">
          <Navbar />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}
const connectedPanelPage = connect(mapState)(PanelPage);

export { connectedPanelPage as PanelPage };
