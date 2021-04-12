import React from "react";
import "./main.css";
import TodoTasksFinal from "../TodoTask/TodoTasksFinal";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="tasktoolbar">
            <div className="tasktoolbar-top">
              <div className="tasktoolbar-headline">
                <div className="titleitem">
                  <h2 className="list-title">
                    <span className="title">Tasks</span>
                  </h2>
                </div>
              </div>
              <div className="tasktoolbar-right"></div>
            </div>
          </div>
          <div className="flex-container">
            <div className="flexBoxFix">
              <div className="main-background">
                <TodoTasksFinal />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
