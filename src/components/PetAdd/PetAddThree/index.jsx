import "./style.css";

const PetAddThree = () => {
  return (
    <div className="petadd-three">
      <h3>Thanks! Now give us all the details about Ginger.</h3>
      <div class="row mt-5">
        <div class="col-lg-12 mb-3">
          <p for="name" class="sidebar-text w-100">
            Favorite things
          </p>
          <div class="row">
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="all" for="all" />
              Select all
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="kisses" for="kisses" />
              Giving kisses
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="walks" for="walks" />
              Walks
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="barking" for="barking" />
              Barking
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input
                type="checkbox"
                class="me-3"
                id="snuggling"
                for="snuggling"
              />
              Snuggling
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="treat" for="treat" />
              Treats
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="fetch" for="fetch" />
              Playing fetch
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="naps" for="naps" />
              Naps
            </div>
            <div class="col-lg-4 mb-3 mt-1">
              <input type="checkbox" class="me-3" id="toys" for="toys" />
              Toys
            </div>
          </div>
        </div>
        <div class="col-lg-12 mb-3">
          <label for="name" class="sidebar-text">
            Food
          </label>
          <textarea
            class="w-100"
            id="name"
            height="100px"
            placeholder="Tell us the what, when, and where of food."
          ></textarea>
        </div>
        <div class="col-lg-12">
          <label for="name" class="sidebar-text">
            Anything else
          </label>
          <textarea
            class="w-100"
            id="name"
            placeholder="Hopes and dreams, biggest fears, medical issues, etc."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PetAddThree;
