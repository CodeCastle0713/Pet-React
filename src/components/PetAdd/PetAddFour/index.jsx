import "./style.css";

const PetAddFour = () => {
  return (
    <div className="petadd-four">
      <h3>Got a preferred vet? Let us know.</h3>
      <div class="row my-5">
        <div class="col-lg-6 pe-4 mb-4">
          <label for="name" class="sidebar-text">
            Veterinarian’s name
          </label>
          <input
            type="text"
            class="w-100"
            id="name"
            placeholder="Veterinarian’s name"
          />
        </div>
        <div class="col-lg-6 ps-4 mb-4">
          <label for="phone" class="sidebar-text">
            Veterinarian’s phone number
          </label>
          <input
            type="text"
            class="w-100"
            id="phone"
            placeholder="000-000-0000"
          />
        </div>
        <div class="col-lg-12 mb-4">
          <label for="address" class="sidebar-text">
            Veterinarian’s street address
          </label>
          <input
            type="text"
            class="w-100"
            id="address"
            placeholder="Veterinarian's street address"
          />
        </div>
        <div class="col-lg-6 pe-4 mb-4">
          <label for="city" class="sidebar-text">
            City
          </label>
          <input type="text" class="w-100" id="city" placeholder="City" />
        </div>
        <div class="col-lg-3 pe-4 mb-4 ps-4">
          <label for="state" class="sidebar-text">
            State
          </label>
          <select id="state" class="w-100">
            <option value="FL">FL</option>
            <option value="LA">LA</option>
            <option value="NY">NY</option>
            <option value="CF">CF</option>
          </select>
        </div>
        <div class="col-lg-3 pe-4 mb-4">
          <label for="zip" class="sidebar-text">
            Zip
          </label>
          <input type="text" class="w-100" id="zip" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default PetAddFour;
