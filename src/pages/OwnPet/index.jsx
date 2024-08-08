import { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import FooterBtn from "../../components/FooterBtn";
import PetAddOne from "../../components/PetAdd/PetAddOne";
import PetAddTwo from "../../components/PetAdd/PetAddTwo";
import PetAddThree from "../../components/PetAdd/PetAddThree";
import PetAddFour from "../../components/PetAdd/PetAddFour";
import PetAddFive from "../../components/PetAdd/PetAddFive";

const OwnPet = () => {
  const [petPage, setPetPage] = useState(1);
  let petAddPage;
  if (petPage === 1) petAddPage = <PetAddOne />;
  else if (petPage === 2) petAddPage = <PetAddTwo />;
  else if (petPage === 3) petAddPage = <PetAddThree />;
  else if (petPage === 4) petAddPage = <PetAddFour />;
  else petAddPage = <PetAddFive />;
  return (
    <div className="OwnPet d-flex">
      <Sidebar petPage={petPage} />
      <div className="pet-content d-flex flex-column justify-content-between">
        {petAddPage}
        <FooterBtn setPetPage={setPetPage} petPage={petPage} />
      </div>
    </div>
  );
};

export default OwnPet;
