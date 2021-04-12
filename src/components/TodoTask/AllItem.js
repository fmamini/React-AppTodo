import React from "react";
import { connect } from "react-redux";
import ItemCrud from "./ItemCrud";
import { todoService } from "../../services";
import "./Allitem.css";

class AllItem extends React.Component {

  async componentDidMount() {
    const dataAllitem = await todoService.allItem();
    this.props.dispatch({
      type: "FETCHING_DATA",
      data: dataAllitem,
    });
  }

  render() {
    const { crudItem } = this.props;
    return (
      <div className="crud-container">
        {crudItem.length > 0 ? (
          <div className="content-crud">
            <div className="item">
              {crudItem.map((post, index) => {
                return (
                  <div key={index}>
                    <ItemCrud post={post} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateAll = (state) => {
  return {
    crudItem: state.FormItem.crud,
  };
};
export default connect(mapStateAll)(AllItem);
