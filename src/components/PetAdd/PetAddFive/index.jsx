import "./style.css";

const PetAddFive = () => {
  return (
    <div className="petadd-five">
      <h3 class="text-center">
        Okay, Ginger’s all set!
        <br />
        We can’t wait to meet her.
      </h3>
      <div class="d-flex position-relative flex-column my-5 justify-content-center align-items-center bg-white rounded pt-5 p-5 mx-5">
        <img
          src="./asset/img/ginger-color.png"
          alt=""
          class="position-absolute step-5-avatar-image"
        />
        <h3 class="fs-1">Ginger</h3>
        <p class="sidebar-text mb-4 pb-4 border-bottom w-100 text-center">
          Golden Retriever
        </p>
        <p class="small-text mb-2">FAVORITE THINGS</p>
        <div class="d-flex flex-wrap w-100 justify-content-center mb-5">
          <span class="add-pet-tag-span">Barking</span>
          <span class="add-pet-tag-span">Snuggling</span>
          <span class="add-pet-tag-span">Giving kisses</span>
          <span class="add-pet-tag-span">Walks</span>
          <span class="add-pet-tag-span">Treats</span>
        </div>
        <div class="row w-100 border rounded">
          <div class="col-lg-3 p-3 border-end d-flex flex-column justify-content-center align-items-center">
            <img src="./asset/img/icon-female.png" alt="" height="32px" />
            <p class="small-text">FEMALE</p>
          </div>
          <div class="col-lg-3 p-3 border-end d-flex flex-column justify-content-center align-items-center">
            <h3 class="fw-lighter overview-catalog-font">8</h3>
            <p class="small-text">YEARS OLD</p>
          </div>
          <div class="col-lg-3 p-3 border-end d-flex flex-column justify-content-center align-items-center">
            <img src="./asset/img/icon-tick.png" alt="" height="32px" />
            <p class="small-text">SPAYED</p>
          </div>
          <div class="col-lg-3 p-3 d-flex flex-column justify-content-center align-items-center">
            <h3 class="fw-lighter overview-catalog-font">10-20</h3>
            <p class="small-text">Kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetAddFive;
