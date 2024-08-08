import "./style.css";

const PetAddTwo = () => {
  return (
    <div className="petadd-two">
      <h3>Yay, we love dogs! Give us the basics about your pup.</h3>
      <div className="row my-5">
        <div className="col-lg-6 pe-4 mb-4">
          <label for="name" className="sidebar-text">
            Name
          </label>
          <input
            type="text"
            className="w-100"
            id="name"
            placeholder="Pet's name"
          />
        </div>
        <div className="col-lg-6 ps-4 d-flex mb-4 align-items-end">
          <button className="rounded-circle me-4 upload-button">
            <img src="./asset/img/camera.png" alt="none" />
          </button>
          <p className="sidebar-text">Upload a photo</p>
        </div>
        <div className="col-lg-6 pe-4 mb-4">
          <label for="breed" className="sidebar-text">
            Breed
          </label>
          <input
            type="text"
            className="w-100"
            id="breed"
            placeholder="Pet's breed"
          />
        </div>
        <div className="col-lg-6 ps-4">
          <label for="birthday" className="sidebar-text">
            Birthday
          </label>
          <input
            type="text"
            className="w-100"
            id="birthday"
            placeholder="MM/DD//YYYY"
          />
        </div>
        <div className="col-lg-6 pe-4 mb-4">
          <p className="sidebar-text">Gender</p>
          <div className="selection-div gender-select rounded d-flex justify-content-between p-2 bg-white">
            <input
              type="radio"
              className=""
              id="female"
              name="gender"
              hidden
              value="female"
            />
            <label
              for="female"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              Female
            </label>
            <input
              type="radio"
              className=""
              id="male"
              name="gender"
              hidden
              value="male"
            />
            <label
              for="male"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              Male
            </label>
          </div>
        </div>
        <div className="col-lg-6 ps-4">
          <p className="sidebar-text">Spayed or Neutered</p>
          <div className="selection-div spayed-select rounded d-flex justify-content-between p-2 bg-white">
            <input
              type="radio"
              className=""
              id="yes"
              name="spayed"
              hidden
              value="yes"
            />
            <label
              for="yes"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              Yes
            </label>
            <input
              type="radio"
              className=""
              id="no"
              name="spayed"
              hidden
              value="no"
            />
            <label
              for="no"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              No
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <p className="sidebar-text">Weight</p>
          <div className="selection-div weight-select rounded d-flex justify-content-between p-2 bg-white">
            <input
              type="radio"
              className=""
              id="0-5"
              name="weight"
              hidden
              value="0-5"
            />
            <label
              for="0-5"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              0-5 kg
            </label>
            <input
              type="radio"
              className=""
              id="5-10"
              name="weight"
              hidden
              value="5-10"
            />
            <label
              for="5-10"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              5-10 kg
            </label>
            <input
              type="radio"
              className=""
              id="10-20"
              name="weight"
              hidden
              value="10-20"
            />
            <label
              for="10-20"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              10-20 kg
            </label>
            <input
              type="radio"
              className=""
              id="20+"
              name="weight"
              hidden
              value="20+"
            />
            <label
              for="20+"
              className="text-center w-50 sidebar-text font-color-navy rounded"
            >
              20+ kg
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetAddTwo;
