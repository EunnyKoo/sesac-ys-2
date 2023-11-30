import { Component } from "react";

class HandleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "검정색 글씨",
      color: "", 
    };

    this.handleOnClickBlack = this.handleOnClickBlack.bind(this);
    this.handleOnClickRed = this.handleOnClickRed.bind(this);
    this.handleOnClickBlue = this.handleOnClickBlue.bind(this);
  }

  handleOnClickBlack() {
    this.setState({ msg: "검정색 글씨", color: "black" });
  }

  handleOnClickRed() {
    this.setState({ msg: "빨간색 글씨", color: "red" });
  }

  handleOnClickBlue() {
    this.setState({ msg: "파란색 글씨", color: "blue" });
  }

  render() {
    return (
      <>
        <h3>이벤트 핸들링 실습 2</h3>

        <h1 style={{ color: this.state.color }}>
          {this.state.msg}
        </h1>

        <br />
        <button onClick={this.handleOnClickBlack} style={{ color: "black" }}>
          검정색
        </button>
        <button onClick={this.handleOnClickRed} style={{ color: "red" }}>
          빨간색
        </button>
        <button onClick={this.handleOnClickBlue} style={{ color: "blue" }}>
          파란색
        </button>
      </>
    );
  }
}

export default HandleEx;