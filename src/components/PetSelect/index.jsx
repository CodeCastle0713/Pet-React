import "./style.css";

const PetSelect = (props) => {
  return (
    <div className="d-flex col-lg-3 col-md-6 justify-content-center flex-column">
      <input
        type="radio"
        id={props.petArray[0]}
        hidden
        name="pet-type"
        value={props.petArray[0]}
      />
      <label
        className="py-2 rounded d-flex align-items-center flex-column"
        htmlFor={props.petArray[0]}
      >
        <img
          className="rounded-circle"
          src={props.petArray[1]}
          alt="none"
          height="120px"
        />
        <h4>{props.petArray[0]}</h4>
      </label>
    </div>
  );
};

export default PetSelect;
