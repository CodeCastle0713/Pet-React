import "./style.css";

const ReviewCard = (props) => {
  return (
    <div className="col-lg-6 col-md-12 p-3">
      <div className="review-card border-round d-flex">
        <img src={props.reviewData[2]} alt="none" />
        <div className="review-card-info ps-4">
          <h4>{props.reviewData[1]}</h4>
          <p>{props.reviewData[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
