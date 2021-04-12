import React from "react";
import { connect } from "react-redux";
import EditItemCrud from "./EditItemCrud";
import { todoService } from "../../services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./FormItem.css";

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      submitted: false,
      editing: false,
      showing: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleInComplete = this.handleInComplete.bind(this);
    this.handleAlltasks = this.handleAlltasks.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { title } = this.state;
    const data = {
      title: title,
      content: title,
      done: true,
      duetoDateTime: "2021-01-13T09:36:31.706Z",
      tags: "1",
    };
    const addtodo = await todoService.addtodo(data)
    if (title.length > 15) {
      this.props.dispatch({
        type: "ADD_POST",
        data: addtodo,
      });
      this.setState({ title: "" });
    }
    else {
      toast.error(' تعداد حروف تسک وارد شده باید بیشتر از 15 باشد ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async handleComplete() {
    const showCopmplete = await todoService.showcomplete()
    if (showCopmplete) {
      this.props.dispatch({ type: "COMPLETE_BUTTON", data: showCopmplete });
    }
  }
  async handleInComplete() {
    const showIncomplete = await todoService.showincomplete()
    if (showIncomplete) {
      this.props.dispatch({ type: "INCOMPLETE_BUTTON", data: showIncomplete });
    }

  }

  async handleAlltasks() {
    const showAlltask = await todoService.showalltask()
    if (showAlltask) {
      this.props.dispatch({ type: "ALL_TASKS", data: showAlltask });
    }
  }

  render() {
    const { showingform } = this.props;
    const { showingEdit } = this.props;
    const { title, submitted } = this.state;
    return (
      <div className="PanelContent">
        <button onClick={this.handleComplete} className="filter-tasks Complete">
          Complete
        </button>
        <button
          onClick={this.handleInComplete}
          className="filter-tasks Incomplete"
        >
          Incomplete
        </button>
        <button onClick={this.handleAlltasks} className="filter-tasks Alltasks">
          Alltasks
        </button>
        {showingform && (
          <form name="form" onSubmit={this.handleSubmit}>
            <div className="form-content">
              <div className="col-md-12 row p-0 m-0">
                <div className="col-md-1 p-0">
                  <button className="btn btn-success">Add</button>
                  <ToastContainer />
                </div>
                <div
                  className={
                    "col-md-11 p-0 form-group" +
                    (submitted && !title ? " has-error" : "")
                  }
                >
                  <input
                    type="text"
                    placeholder="Add a Task +"
                    className="form-control"
                    name="title"
                    value={title}
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
        {!showingform && showingEdit && (
          <div className="content">
            {this.props.items.map((post) => {
              return post.editing && <EditItemCrud post={post} key={post.id} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { showingform } = state.FormItem;
  const { showingEdit } = state.FormItem;

  return {
    items: state.FormItem.crud,
    showingform,
    showingEdit,
  };
};
export default connect(mapStateToProps)(FormItem);
