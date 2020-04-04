import React, { Component } from "react";
import data from "./data";

class Random extends Component {
  state = {
    randomData: data(),
  };
  getRandom = () => {
    this.setState({
      randomData: data(),
    });
  };
  render() {
    return (
      <div style={{ color: "#01132b" }}>
        {this.state.randomData.length > 0 &&
          this.state.randomData.map(({ id, fact, img }) => (
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={img} alt={id} />
              <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{fact}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Random;
