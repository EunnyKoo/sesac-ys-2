import PropTypes from "prop-types";

function FavFoodProps({ title, content }) {
  return (
    <>
      <h3>내가 제일 좋아하는 음식은?</h3>
      <div>음식 이름: {title}</div>
      <div>좋아하는 이유: {content}</div>
    </>
  );
}

FavFoodProps.defaultProps = {
  title: "샌드위치",
  content: "내용물을 다양하게 넣을 수 있다",
};

FavFoodProps.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default FavFoodProps;
