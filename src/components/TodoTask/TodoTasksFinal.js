import React from "react";
import "./TodoTasksFinal.css";
import FormItem from "./FormItem";
import AllItem from "./AllItem";

class TodoTasksFinal extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: "#fff",
      padding: "5px 20px",
    };
    return (
      <div className="schedule-sharing" style={divStyle}>
        <FormItem />
        <AllItem />
      </div>
    );
  }
}
export default TodoTasksFinal;
