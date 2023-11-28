import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <h3>클래스형 컴포넌트를 이용 ( Props )</h3>
        <div>제목은 {this.props.title}</div>
        <div>내용은 {this.props.content}</div>
        <div>숫자는 {this.props.number}</div>
      </>
    );
  }
  static defaultProps = {
    name: "은구",
  };
}

ClassPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default ClassPropsEx;
