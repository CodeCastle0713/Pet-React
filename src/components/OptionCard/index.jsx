import "./style.css";

const OptionCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 px-4 my-5">
      <div className="option-card">
        <div className="option-icon-container">
          <img src={props.optionData[4]} alt="none" />
        </div>
        <div className="option-card-info">
          <h3>{props.optionData[1]}</h3>
          <p className="pt-3">{props.optionData[0]}</p>
        </div>
        <div className="option-card-price">
          <h3>{props.optionData[2]}</h3>
          <p className="small-text pb-2">{props.optionData[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
