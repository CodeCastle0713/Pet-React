import "./style.css";
import { useState } from "react";

const FooterBtn = (props) => {
  const [nextBtnName, setNextBtnName] = useState("Next");

  const next = () => {
    if (props.petPage === 4) {
      setNextBtnName("Done");
    }
    if (props.petPage === 5) {
      props.setPetPage(1);
      setNextBtnName("Next");
    } else props.setPetPage((value) => value + 1);
  };
  const back = () => {
    if (props.petPage === 5) {
      setNextBtnName("Next");
    }
    if (props.petPage === 1) {
      setNextBtnName("Done");
      props.setPetPage(5);
    } else props.setPetPage((value) => value - 1);
  };
  return (
    <div className="footer-Btn d-flex justify-content-between bg-white justify-content-space-between align-items-center">
      <button className="custom-btn1 theme-btn-1" onClick={back}>
        Back
      </button>
      <button className="custom-btn1 theme-btn-2" onClick={next}>
        {nextBtnName}
      </button>
    </div>
  );
};

export default FooterBtn;
