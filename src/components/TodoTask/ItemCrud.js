import React, { Component } from "react";
import { connect } from "react-redux";
import * as Aicons from "react-icons/Ai";
import { todoService } from "../../services"
import "./itemCrud.css";

class ItemCrud extends Component {

  handleEditCrud(id) {
    this.props.dispatch({ type: "EDIT_POST", id: id });
  }

  async handleDeleteCrud(id) {
    const deleteItem = await todoService.deleteitem(id)
    if (deleteItem) {
      this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id });
    }
  }

  async handlecomplete(id) {

    const data = {
      title: this.props.post.title,
      content: this.props.post.title,
      done: !this.props.post.done,
      duetoDateTime: "2021-01-18T10:04:44.081Z",
      tags: "1",
    };
    const doneTask = await todoService.donetask(data, id)
    if (doneTask) {
      this.props.dispatch({ type: "COMPLETE_TODO", id: id });
    }
  }

  render() {
    const lineText = this.props.post.done
      ? "col-md-10 title d-lineText"
      : "col-md-10 title";
    return (
      <div className="item-crud">
        <div className="item-content">
          <input
            type="Checkbox"
            className="checkbox"
            checked={this.props.post.done}
            onChange={() => this.handlecomplete(this.props.post.id)}
          />
          <ul className="row-item row">
            <li className="col-md-2">
              <button className="edit-task"
                onClick={() => this.handleEditCrud(this.props.post.id)}
                disabled={this.props.post.done}>
                <Aicons.AiOutlineEdit
                  className="crud-edit"
                />
              </button>
              <button className="delete-task">
                <Aicons.AiOutlineDelete
                  className="crud-delete"
                  onClick={() => this.handleDeleteCrud(this.props.post.id)}
                />
              </button>
            </li>
            <li className={lineText}>{this.props.post.title}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect()(ItemCrud);
