import React, { Component } from "react";
import { connect } from "react-redux";
import { todoService } from "../../services"

class EditItemCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    let user = this.props.post;
    this.setState({
      title: user.title,
    });
  }

  async handleEdit(event, id) {
    event.preventDefault();
    this.setState({ title: this.state.title });
    const data = {
      title: this.state.title,
      content: this.state.title,
      done: false,
      duetoDateTime: "2021-01-18T10:04:44.081Z",
      tags: "1",
    };
    const editTodo = await todoService.edittodo(data, id)
    if (editTodo) {
      this.props.dispatch({ type: "UPDATE", data, id });
    }

  };
  render() {
    return (
      <div className="Edit-form">
        <form onSubmit={(event) => this.handleEdit(event, this.props.post.id)}>
          <div className="row Update">
            <div className="col-md-1">
              <button className="btn-edit">Update</button>
            </div>
            <div className=" form-group col-md-11">
              <input
                required
                className="form-control"
                name="title"
                type="text"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
                placeholder="Enter Title"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(EditItemCrud);
