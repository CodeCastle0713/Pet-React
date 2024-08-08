import "./style.css";
import PetSelect from "../../PetSelect";

const PetAddOne = () => {
  const petArray = [
    ["dog", "./asset/img/natasha.png"],
    ["cat", "./asset/img/nuffin.png"],
    ["bird", "./asset/img/peep.png"],
    ["other", "./asset/img/marlon.png"],
  ];
  return (
    <div className="petadd-one">
      <h3>
        Nice to meet you, Meagan. Tell us all about your furry, feathery, or
        scaley friend.
      </h3>
      <div className="my-5">
        <p className="sidebar-text">What type of pet do you have?</p>
        <form className="bg-white rounded d-flex justify-content-between p-3 mt-3">
          {petArray.map((index, key) => {
            return <PetSelect key={key} petArray={index} />;
          })}
        </form>
      </div>
      <p>
        Have multiple pets? That’s awesome. You can create additional pet
        profiles for the whole family later.
      </p>
    </div>
  );
};

export default PetAddOne;
