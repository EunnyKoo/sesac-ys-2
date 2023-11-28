import { Component } from "react";
import PropTypes from "prop-types";

class ClassCompExercise extends Component {
  render() {
    return (
      <>
        <h3>App 컴포넌트에서 넘겨준 text props입니다.</h3>
        <button
          onClick={() => {
            console.log("콘솔 띄우기 성공!");
          }}
        >
          yes
        </button>
      </>
    );
  }
  static defaultProps = {
    text: "이건 기본 text props 입니다.",
  };
}

ClassCompExercise.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassCompExercise;
