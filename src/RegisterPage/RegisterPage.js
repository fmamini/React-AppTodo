import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
        repeatePass: "",
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.email && user.password && user.password === user.repeatePass) {
      this.props.register(user);
    }
  }
  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="register-form">
        <div className="register-white">
          <h2> Create an account </h2>{" "}
          <form name="form" onSubmit={this.handleSubmit}>
            <div
              className={
                "form-group" + (submitted && !user.email ? " has-error" : "")
              }
            >
              <label htmlFor="email"> Email Address </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={this.handleChange}
              />{" "}
              {submitted && !user.email && (
                <div className="help-block"> Enter the email address </div>
              )}
            </div>

            <div
              className={
                "form-group" + (submitted && !user.password ? " has-error" : "")
              }
            >
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={this.handleChange}
              />{" "}
              {submitted && !user.password && (
                <div className="help-block"> Enter the password </div>
              )}
            </div>
            <div
              className={
                "form-group" +
                (submitted && !user.repeatePass ? " has-error" : "")
              }
            >
              <label htmlFor="repeatePass"> Enter again password </label>
              <input
                type="password"
                id="confirm_password"
                className="form-control"
                name="repeatePass"
                value={user.repeatePass}
                onChange={this.handleChange}
              />{" "}
              {submitted && !user.repeatePass && (
                <div className="help-block"> Enter again the password </div>
              )}{" "}
              {submitted && user.password !== user.repeatePass && (
                <div className="help-block">
                  {" "}
                  Repeat password does not match the password entered{" "}
                </div>
              )}{" "}
            </div>
            <div className="form-group">
              <button className="btn btn-primary"> Register </button>{" "}
              {registering && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <Link to="/login" className="btn btn-link">
                {" "}
                Cancel{" "}
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
