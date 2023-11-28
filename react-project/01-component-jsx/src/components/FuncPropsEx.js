//1. 함수형 컴포넌트 이용한 props
// function FuncPropsEx(props) {
//     return (
//       <>
//         <div>함수형 컴포넌트를 이용 ( Props )</div>
//         <div>제목은 {props.title}</div>
//         <div>내용은 {props.content}</div>
//       </>
//     );
//   }

//2. 매개변수 props를 받아올 때부터 구조 분해
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>제목은 {title}</div>
//       <div>내용은 {content}</div>
//     </>
//   );
// }

//3. proptype을 이용해서 어떤 props가 넘어올지 명시
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생할 수 있음
import PropTypes from "prop-types";

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <h3>함수형 컴포넌트를 이용 ( Props )</h3>
      <div>제목은 {title}</div>
      <div>내용은 {content}</div>
      <div>숫자는 {number}</div>
    </>
  );
}

FuncPropsEx.defaultProps = {
  title: "코딩온",
  content: "컨텐츠",
  number: 2,
};

FuncPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FuncPropsEx;
