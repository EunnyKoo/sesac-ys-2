import PropTypes from "prop-types";
import image from "./book.jpg";

function BestSellerProps({ title, author, price, type }) {
  return (
    <>
      <div className="Section_wrap">
        <h1 className="Section_title_bestseller">이번주 베스트셀러</h1>
        <img src={image} className="Section_bookpic" />
        <h3 className="Section_title">{title}</h3>
        <div className="Section_author">저자: {author}</div>
        <div className="Section_price">판매가: {price}</div>
        <div className="Section_type">구분: {type}</div>
      </div>
    </>
  );
}

BestSellerProps.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default BestSellerProps;
