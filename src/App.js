import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      add: "",
      list: [],
    };
  }

  enter(key, value) {
    this.setState({ [key]: value });
  }

  addItems() {
    const add = {
      id: 1 + Math.random(),
      value: this.state.add,
    };

    const list = [...this.state.list];
    list.push(add);

    this.setState({
      list,
      add: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="box">
        <h1 className="heading">My TODOLIST</h1>
        <p className="para"> Add Your Items.</p>
        <div className="all">
          <input
            type="text"
            name="add"
            className="in"
            value={this.state.add}
            onChange={(M) => this.enter(M.target.name, M.target.value)}
          />
          <button className="btn" onClick={() => this.addItems()}>
            Add
          </button>
        </div>
        {this.state.list.map((item) => {
          return (
            <div className="dot">
              <div key={item.id}>
                {item.value}{" "}
                <button onClick={() => this.deleteItem(item.id)}>
                  Delete this item.
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
